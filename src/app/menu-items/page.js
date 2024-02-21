'use client'
import Link from 'next/link';
import useProfile from '@/components/UseProfile';
import UserTabs from '@/components/layout/UserTabs'
import Right from '@/components/icons/Right';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);
  const {loading, data} = useProfile();
  
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
       setMenuItems(menuItems); 
      });
    })
  }, []);
  

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not a admin.';
  }

  return (
    <section className='mt-8 max-w-md mx-auto'>
      <UserTabs isAdmin={true} />
      <div className='mt-8'>
        <Link
          className='button'
          href={'/menu-items/new'}
        >
          Create new item
          <Right /> 
        </Link>
      </div>
      <div>
        <h2 className='text-sm text-gray-500 mt-8'>Edit menu item</h2>
        {menuItems?.length > 0 && menuItems.map(item => (
          <Link key={item._id} href={'/menu-items/edit/'+item._id} className="mb-1 button">
            <div className='relative w-24 h-24'>
              <Image src={item.image} alt={item.name} layout={'fill'} />
            </div>
            {item.name}
          </Link>
        ))}
      </div>
      
    </section>
    
  );
}