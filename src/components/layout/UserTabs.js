'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const UserTabs = ({isAdmin}) => {
  const path = usePathname();

  return (
    <div className="flex mx-auto gap-2 tabs justify-center mb-4">
      <Link 
        className={path === '/profile' ? 'active' : ''} 
        href={'/profile'}
      >
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link 
            href={'/categories'}
            className={path === '/categories' ? 'active' : ''} 
          >
            Categories
          </Link>
          <Link 
            href={'/menu-items'}
            className={/menu-items/.test(path) ? 'active' : ''} 
          >
            Menu Items
          </Link>
          <Link 
            href={'/users'}
            className={path === '/users' ? 'active' : ''} 
          >
            Users
          </Link>
        </>
      )}
    </div>
  )
}

export default UserTabs;