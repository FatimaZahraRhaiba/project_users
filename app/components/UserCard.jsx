export default function UserCard({user,index}) {
  return (
          <div key={index} className='card'>
          <h3> Name: <span className='name'> {user.name}</span></h3>
          <h3>Friends: {user.friends.map((friend, index)=>(
            <span key={index}>{friend} </span>
          ))}</h3>
            <h3>Interests :</h3>
            <ul>
              {user.interests.map((inte, index)=>(
                <li key={index}>{inte}</li>
              ))}
            </ul>
          </div>
  )
}
