import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    const { user, setUser } = React.useContext(UserDataContext);

    const submitHandler = async (e) =>{
        e.preventDefault()
        const newUser = {
        fullname:{
            firstname: firstName,
            lastname: lastName
        },
        email:email,
        password:password
       }

       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser) 
       if(response.status === 201){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')

       }


        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')

    }

  return (
    <div>
          <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
                {/* <img className='h-50 w-50 mb-1 ' src="/img/logo.png" alt="" /> */}
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}>

            <h3 className='text-[21px] font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-6'><input 
            required
            className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 text-base placeholder:text-sm' 
            type="text" 
            placeholder='First Name'
            value={firstName}
            onChange={(e)=>{
                setFirstName(e.target.value)
            }}
            />

            <input 
            required
            className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 text-base placeholder:text-sm' 
            type="text" 
            placeholder='Last Name'
            value={lastName}
            onChange={(e)=>{
                setLastName(e.target.value)
            }}
            />

            </div>


            <h3 className='text-[20px] font-medium mb-2'>What's your email</h3>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg placeholder:text-base' 
            type="email" 
            placeholder='email@example.com'/>
            
            <h3 className='text-[20px] font-medium mb-2'>Create Password</h3>
            
            <input
             className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             required 
             type="password" 
             placeholder='password'/> 
            <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >
                Create new Account
            </button>

           
        </form>
         <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Log In Here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA 
            and the <span className='underline text-blue-600'>Google Privacy Policy </span>
            and <span className='underline text-blue-600'>Terms of Service</span> apply.
          </p>
            
        </div>
    </div>
    </div>
  )
}

export default UserSignup