"use client"
import Image from 'next/image'

import users from './users/generated_users.json'
import FilterButton from './components/FilterButton'
import { useState } from 'react'
import UserList from './components/UserList'

export default function Home() {

  const [filteredUsers, setFilteredUsers] = useState(users);
  const handleFilter = (interest) => {
    const filtered = users.filter((user) => user.interests.includes(interest));
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <h1>Users page</h1>
      Filter by: <FilterButton interests={['music', 'reading', 'sports', 'cooking', 'travel']} onClick={handleFilter}/>

      <div className='cards'>
        <UserList users={filteredUsers} />
      </div> 

       
    </div>
  )
}