import React from 'react'
import { DarkMode } from './DarkMode'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-blue-400 dark:bg-gray-800 p-2  text-white'>
      <div className='flex items-center gap-8'>
      <h1 className='font-bold text-xl hover:text-blue-600 dark:hover:text-violet-300'>Task Master</h1>
        <ul className='flex gap-4 font-semibold '>
            <li className='hover:text-blue-600 dark:hover:text-violet-300 cursor-pointer'>Home</li>
            <li className='hover:text-blue-600 dark:hover:text-violet-300 cursor-pointer'>About</li>
            <li className='hover:text-blue-600 dark:hover:text-violet-300 cursor-pointer'>Contact</li>
        </ul>
        </div>
        <DarkMode />
    </nav>
  )
}
