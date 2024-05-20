import React from 'react'
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const users: User[] = await res.json();

  return (
    <>
    <h1><strong>Users</strong></h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
      {users.map(user => <li key={user.id}>{user.name} | {user.email} </li>)}
    </ul>
    </>
  )
}

export default UsersPage
