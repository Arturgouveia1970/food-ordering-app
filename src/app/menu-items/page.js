'use client'
import UserTabs from '/src/components/layout/UserTabs';
import useProfile from '/src/components/useProfile';
import EditableImage from '/src/components/layout/EditableImage';
import { useState } from 'react';

export default function MenuItemsPage() {

  const {loading, data} = useProfile();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [basePrice, setBasePrice] = useState(''); 

  async function handleFormSubmit(ev) {
    ev.preventDefault();

  }

  if (loading) {
    return 'Loading...';
  }

  if (!data.admin) {
    return 'Not a admin.';
  }

  return (
    <section className='mt-8'>
      <UserTabs isAdmin={true} />
      <form onSubmit={handleFormSubmit} className='mt-8 max-w-md mx.auto'>
      <div 
        className='grid items-start gap-4' 
        style={{gridTemplateColumns: '3fr .7fr'}}
      >
        <div>
          <img
            className="rounded-lg w-full h-full mb-1"
            src={"/supreme.jpeg"}
            width={250}
            height={250}
            alt={"avatar"}
          /> 
        </div>
        
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
    
  );
}
