// import { useEffect, useState } from 'react';
// import './App.css';
// function App() {
//   const [users, setUsers] = useState([])
//   console.log(users)
//   useEffect(()=>{    

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>setUsers(data))

//   }, [])



//   return (
//     <div className="App">
//    {
//     users.map(user=><User user = {user}></User>)
//    }
    
    
//     </div>
//   );
// }

// export default App;

// function User (props) {
// const {id, name, email} = props.user
//   return (
//     <div style={{backgroundColor:"green", border:"2px solid yellow", borderRadius:"20px"}}>
//       <h1>Id:{id}</h1>
//       <h1>Name:{name}</h1>
//       <h1>Email:{email}</h1>
     
//     </div>
//   )

// }