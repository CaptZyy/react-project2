import React from 'react'

function Navbar() {
  return (
    <>

        <div className='bg-black text-slate-50 text-lg border-b-2 font-mono fixed z-50 h-24 flex w-full mx-auto items-center justify-between px-20 border-gray-400 gap-4'>
            <div>
                <img className=" h-16 w-28 transition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110" src="Logo.png" alt="The Disease" />
            </div>
            <input type="text" className='w-3/5 h-9 focus:outline-none text-black text-sm px-4' placeholder='Search' />
            <button className='hover:border-b-4 py-8'>
                 <a href="">Services</a>
            </button>
            <button className='hover:border-b-4 py-8'>
                <a href="">Articles</a>
            </button>
            <button className='hover:border-b-4 py-8'>
                <a href="">About</a>
            </button>
            <button className='bg-white rounded-full w-24 h-9 text-black transition ease-in-out delay-75 hover:-translate-y-1'>
                <a href="">Add</a>
            </button>    
        </div>
        

    </>
    
  )
}

export default Navbar