import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import {loggedIn} from '../store/amazonSlice';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signIn = e => {
    e.preventDefault();

   auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(auth)
        dispatch(loggedIn(auth));
        navigate('/')
      })
      .catch(error => alert(error.message))

  }

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (

    <div className='w-full h-screen mt-5 flex justify-start items-center flex-col'>
      <Link to="/">
      <img className='w-28' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='image' />
      </Link>

      <div className='border rounded p-5 mt-5 w-[30%]'>
        <h1 className="font-semibold text-xl">Sign-in</h1>

        <form className="my-3">
          <h5 className="font-semibold text-sm">E-mail</h5>
          <input type="text" className="outline outline-slate-500 w-full rounded-sm mt-1 outline-offset-2 outline-1"
           value={email} 
          onChange={e => setEmail(e.target.value)} 
          />

          <h5 className="font-semibold text-sm mt-3">Password</h5>
          <input type="password"
            className="outline outline-slate-500 w-full rounded-sm mt-1 outline-offset-2 outline-1"
          value={password} onChange={e => setPassword(e.target.value)}
          />

          <button onClick={signIn} className=" my-5 bg-gradient-to-b from-[#f0c14b] to-[#f2d488] bg-[length:80%_100%] w-full p-1 rounded-md font-semibold" type='submit' >Sign In</button>
        </form>

        <p className="text-xs">
          By continuing, you agree to Amazon's <span className="text-blue-500">Conditions of Use</span> and <span className="text-blue-500">Privacy Notice.</span>
        </p>
      </div>

      <div className="border-t flex justify-center relative my-4 w-[30%]">
        <div className=" bg-white absolute top-[-10px] text-xs text-gray-500">New to Amazon?</div>
      </div>

      <button onClick={register} className=' my-2 shadow border text-sm w-[30%] p-1 rounded-md font-semibold' >Create your Amazon account</button>

    </div>
  )
}

export default Login