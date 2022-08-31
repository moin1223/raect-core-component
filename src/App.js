import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))

  }, [])

  return (
    <div>
      {
        users.map(user=><User user={user} hi={'hhhh'}></User>)
      }
      
    </div>
  );
};

export default App;
function User ({user,hi}) {
const {id, name, email} = user
  return (
    <div style={{backgroundColor:"green", border:"2px solid yellow", borderRadius:"20px"}}>
      <h1>Id:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>Email:{email}</h1>
      <h1>{hi}</h1>
     
    </div>
  )

}