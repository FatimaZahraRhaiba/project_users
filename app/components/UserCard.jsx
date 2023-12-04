import users from "../users/generated_users.json"

export default function UserCard({user,index}) {
  const { name, interests, friends } = user;

  const getFriendNames = () => {
    if (friends && friends.length > 0) {
      return friends.map((friendId) => {
        const friend = users.find((user) => user.id === friendId);
        return friend ? friend.name : null;
      }).filter(Boolean).join(', ');
    }
    return null;
  };

  return (
          <div key={index} className='card'>
            <div className="card-name">
              <h2 >Name: <span className='name'> {name}</span> </h2>
            </div>
          {/* <h3>Friends: {user.friends.map((friend, index)=>(
            <span key={index}>{friend} </span>
          ))}</h3> */}
          <div className="card-frien">
            <h3>Friends: 
              <span className="friends">
                {friends && friends.length > 0 ? getFriendNames() : "0"}
              </span>
            </h3>

            </div>
          {/* <h3> Interests: {interests.join(', ')}</h3> */}
          

          <div className="interests">
            <h4>Interests:</h4>
            <ul>
              {interests.map((int,index)=>(
                <li key={index}>{int}</li>
              ))}
            </ul>
    </div>
          </div>
  )
}
