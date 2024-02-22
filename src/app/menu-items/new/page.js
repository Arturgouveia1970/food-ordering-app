'use client'
import UserTabs from "@/components/layout/UserTabs";
import useProfile from "../../../components/UseProfile";
import { useState } from "react";
import Link from "next/link";
import Left from "@/components/icons/Left";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
// import Image from "next/image";
// import { postMenuItem, getMenuItem, createMenuItem } from "@/app/api/menu-items/route";

export default function NewMenuItemPage() {
  const {loading, data} = useProfile();
  const [name, setName] = useState('');
  // const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [redirectToItems, setRedirectToItems] = useState(false);


  async function handleFormSubmit(ev) {
    ev.preventDefault();
    const data = {name, description, basePrice,};
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/menu-items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });     
      console.log(response);
      if (response.ok)
        resolve();
      else
        reject();
    });
    
  
    await toast.promise(savingPromise, {
      loading: 'Saving this tasty item',
      success: 'Saved',
      error: 'error saving',
    });
  
    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect('/menu-items');
  }

  if (loading) {
    return 'Loading user info...';
  }
  if (!data.admin) {
    return 'Not an admin.';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={'/menu-items'} className="button">
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <form onSubmit={handleFormSubmit} className='mt-8 max-w-md mx-auto'>
      <div 
        className='grid items-start gap-4' 
        style={{gridTemplateColumns: '.3fr .7fr'}}
      >
        
        
        <div className='grow'>
          <label>Item name</label>
          <input type='text' value={name} onChange={e => setName(e.target.value)}/>
          <label>Description</label>
          <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
          <label>Base Price</label>
          <input type='text' value={basePrice} onChange={e => setBasePrice(Number(e.target.value))}/>
          <button className='mb-2' type='submit'>Save</button>
        </div>
      </div>
      </form>
    </section>
  )
}
