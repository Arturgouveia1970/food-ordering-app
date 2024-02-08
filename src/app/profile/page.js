"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserTabs from '/src/components/layout/UserTabs';
import EditableImage from '/src/components/layout/EditableImage';

export default function ProfilePage() {
  const session = useSession();
  console.log(session);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const { status } = session;
  console.log(session);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          console.log(data);
          setUserName(data.name);
          setStreetAdress(data.streetAdress);
          setCity(data.city);
          setPhoneNumber(data.phoneNumber);
          setCountry(data.country);
          setPostalCode(data.postalCode);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        });
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          phoneNumber,
          streetAdress,
          postalCode,
          city,
          country,
        }),
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error",
    });
  }
  

  if (status === "loading" || !profileFetched) {
    return "loading...";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;

  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />
      <div className="max-w-md mx-auto mt-8">
        <div className="flex gap-4">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                className="rounded-lg w-full h-full mb-1"
                src={userImage}
                width={250}
                height={250}
                alt={"avatar"}
              /> 
              {/* <EditableImage link={Image} setLink={setImage} /> */}
              <label>
                <input className="hidden" type="file" />
                <span className="block border border-gray-300 cursor-pointer rounded-lg p-2 text-center">
                  Edit
                </span>
              </label>
            </div>
          </div>

          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="first and last name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <input
              type="tel"
              value={phoneNumber}
              onChange={(ev) => setPhoneNumber(ev.target.value)}
              placeholder="Phone number"
            />
            <input
              type="text"
              placeholder="Street adress"
              value={streetAdress}
              onChange={(ev) => setStreetAdress(ev.target.value)}
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Postal code"
                value={postalCode}
                onChange={(ev) => setPostalCode(ev.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(ev) => setCity(ev.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(ev) => setCountry(ev.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
