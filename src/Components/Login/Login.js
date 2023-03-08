import React, { useContext, useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Login.css';

function Login() {
  const history=useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(''); 
  const{firebase}=useContext(FirebaseContext)
  const handleLogin=(event)=>{
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>history.push('/')).catch((error)=>{
      alert(error)
    })
    

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(event)=>setEmail(event.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John@example.com"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            onChange={(event)=>setPassword(event.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link className='link' to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
