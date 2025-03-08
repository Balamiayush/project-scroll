import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full  flex h-40 fixed top-0 p-8 items-center justify-between z-[100]'>
      <svg height="820" viewBox="0 0 1066 820" width="100" xmlns="http://www.w3.org/2000/svg"><path d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z" fill="#fff"></path></svg>
      <ul className='flex flex-col  uppercase overflow-hidden'>
        {
          ["WORK","STUDIO","Archive","Jobs2","Contact"].map((items,index)=>{
            return <li  className='cursor-pointer nav-item  gap-1   items-center   relative   flex flex-col    text-white' key={index}>
              <span className='  relative span1 '>{items}</span>
            <span className='   text-blue-500 bg-red-400 span2'>{items}</span>
            </li>
          })
        }
      </ul>
    </div>
  )
}
export default Navbar;