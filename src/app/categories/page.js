'use client';
import React, { useEffect, useState } from 'react';
import UserTabs from '/src/components/layout/UserTabs';

const CategoriesPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/profile').then(response => {
      response.json().then(data => {
        setIsAdmin(data.admin);
      })
    })
  }, []);

  if (!isAdmin) {
    return 
      <div>
        You must be logged in as an admin to view this page.
      </div>;
  }
  return (
    <section className='mt-8 max-w-lg mx-auto'>
      <UserTabs isAdmin={true} />
      categories
    </section>
  )
}

export default CategoriesPage;
