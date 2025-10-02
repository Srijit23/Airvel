import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()

   const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})

      const {captain,setCaptain} = React.useContext(CaptainDataContext)
      const [vehicleColor, setVehicleColor] = useState('');
      const [vehiclePlate, setVehiclePlate] = useState('');
      const [vehicleCapacity, setVehicleCapacity] = useState('');
      const [vehicleType, setVehicleType] = useState('');
      
      const submitHandler = async (e) =>{
          e.preventDefault()
          const captainData = {
              fullname:{
                  firstname:firstName,
                  lastname:lastName
              },
              email:email,
              password:password,
                vehicle:{
                    color:vehicleColor,
                    plate:vehiclePlate,
                    capacity:vehicleCapacity,
                    vehicleType:vehicleType
          }
        }
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
          if(response.status === 201){
          const data = response.data
          setCaptain(data)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
          setEmail('')
          setPassword('')
          setFirstName('')
          setLastName('')
          setVehicleColor('')
          setVehiclePlate('')
          setVehicleCapacity('')
          setVehicleType('')
        }

      

return (
    <div>
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <form onSubmit={submitHandler}>
                    <h3 className='text-[21px] w-full font-medium mb-2'>What's our Captain's name</h3>
                    <div className='flex gap-4 mb-6'>
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-base placeholder:text-sm'
                            type="text"
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-base placeholder:text-sm'
                            type="text"
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                    </div>
                    <h3 className='text-[20px] font-medium mb-2'>What's our Captain's email</h3>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                    />
                     <input
             className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             required 
             type="password" 
             placeholder='password'/>
                    <h3 className='text-[20px] font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex flex-col sm:flex-row gap-2 mb-4'>
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-3 py-2 w-full text-base placeholder:text-sm'
                            type='text'
                            placeholder='Color'
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-3 py-2 w-full text-base placeholder:text-sm'
                            type='text'
                            placeholder='Plate'
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-3 py-2 w-full text-base placeholder:text-sm'
                            type='number'
                            min='1'
                            placeholder='Capacity'
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                        />
                        <select
                            required
                            className='bg-[#eeeeee] rounded px-3 py-2 w-full text-base focus:outline-none'
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option className = 'text-sm' value='' disabled>
                                Type
                            </option>
                            <option className = 'text-sm' value='car'>Car</option>
                            <option className = 'text-sm' value='auto'>Auto</option>
                            <option className = 'text-sm' value='moto'>Moto</option>
                        </select>
                    </div>
                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>
                        Create new Account
                    </button>
                </form>
                <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Log In Here</Link></p>
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


export default CaptainSignup