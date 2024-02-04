"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const session = useSession();
  const status = session.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const userImage = userData?.image;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  
  const newLocal = <Link href={"/profile"}>
    <Image className="rounded-full" src={userImage} alt={userName} width={40} height={40} />
  </Link>;
  return (
    <>
      <header className="flex items-center justify-between ">
        <nav className="flex gap-8 text-gray-500 font-semibold items-center">
          <Link className="text-primary font-semibold text-2xl" href="/">
            ST PIZZA
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex gap-4 text-gray-500 font-semibold items-center">
          {status === "authenticated" && (
            <>
              <div className="rounded-full">{newLocal}</div>              
              <button
                onClick={() => signOut()}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Logout
              </button>
            </>
          )}
          {status === "unauthenticated" && (
            <>
              <Link href={"/login"}>Login</Link>
              <Link
                href={"/register"}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
