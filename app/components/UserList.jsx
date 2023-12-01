import UserCard from "./UserCard";

export default function UserList({ users} ) {
  return (
    <>
        {users.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
    </>  
  )
}
