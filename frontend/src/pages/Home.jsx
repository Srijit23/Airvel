import React from 'react'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [pannelOpen, setpannelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    
    e.preventDefault()
  }

  useGSAP(() => {
      if(pannelOpen){
        gsap.to(panelRef.current, {
          height:  '70%', 
          opacity: 1 
      
        })
        gsap.to(panelCloseRef.current, {
          opacity: 1
        } )
      } else {
        gsap.to(panelRef.current, {
          height:  '0%',
          // opacity:0
        })
        gsap.to(panelCloseRef.current, {
          opacity: 0
        } )

      }
  },[pannelOpen])




  return (
    <div className='h-screen relative'>
      <div className='h-screen w-screen'>
        {/* Image for temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen top-0 absolute w-full'>
       <div className='h-[30%] p-5 bg-white relative '>
        <h5 ref={panelCloseRef} onClick={() => {
          setpannelOpen(false)
        }} className='absolute opacity-0 right-6 top-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
         <h4 className='text-[25px] font-semibold'>Find a Trip</h4>
        <form onSubmit={(e) => {
         submitHandler(e)}}>

            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
          <input
          onClick={() => {
            setpannelOpen(true)
          }}
          value={pickup}
          onChange={(e) => {
            setPickup(e.target.value)
          }}
           className=
           'bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
           type="text" 
           placeholder="Add a pick-up location" />
          <input
          onClick={() => {
            setpannelOpen(true)
          }}
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value)
          }}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
           type="text"
            placeholder="Enter your destination" />

        </form>
       </div>
       <div ref={panelRef} className=' opacity-0 h-[0] bg-red-500 '>

       </div>
      </div>
    </div>
  )
}

export default Home