import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
  
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