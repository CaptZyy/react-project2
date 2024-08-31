import React from 'react'


function Footer() {
  return (
    <div className='bg-black flex justify-center font-mono items-center p-6 border-t-4 border-white '>
      <div className=" flex-1 gap-6 text-slate-50  h-10 flex w-full mx-auto items-center justify-between  ">
        
        <a href="" className=''>
          <p>&copy; 2024 | ZylianAstraComp | Develop by Daffa </p>
        </a>
        
        <a href="" className='ransition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'><h3>Contact Us</h3></a>
        <a href="" className='ransition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'><h3>Privacy Policy</h3></a>
        <a href="" className='ransition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'><h3>Support</h3></a>
        <img className=" h-16 w-28 transition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110" src="Logo.png" alt="The Disease" />
      </div>
    </div>

  )
}

export default Footer
