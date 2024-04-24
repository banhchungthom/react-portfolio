import React from 'react'
import { useState } from 'react';
import { close, logod, menu } from '../assets';
import { navLinks } from '../constants'
const NavBar = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <>
    <nav className='w-full flex py-6 justify-between 
    items-center navbar'>
      <img src={logod} alt='Duong' className='w-[30px] h-[30  px]'/>
      <ul className='list-none ss:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
          key={nav.id}
          className={`font-mono font-normal cursor-pointer text-[12px] text-white ${index === navLinks.length-1? 'mr-0' : 'mr-8'}`}>
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='ss:hidden flex flex-1 justify-end items-center '>
          <img src={Toggle? close:menu} className='object-contain cursor-pointer' onClick={()=>setToggle(!Toggle)}/>
          <div className={`${Toggle? 'flex': 'hidden'} sidebar p-6 top-20 right-0 mx-4 my-0 bg-blue-gradient min-w-[140px] rounded-xl absolute`}>
            <ul className='list-none flex-col justify-end items-center flex-1'>
              {navLinks.map((nav) => (
                <li 
                key={nav.id}
                className={`my-1.5 font-mono font-normal cursor-pointer text-[12px] text-white`}>
                  <a href={`${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar;