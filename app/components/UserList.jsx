import UserCrad from "./UserCrad";

export default function UserList({ users} ) {
  return (
    <>
        {users.map((user) => (
            <UserCrad key={user.id} user={user} />
        ))}
    </>  
  )
}
