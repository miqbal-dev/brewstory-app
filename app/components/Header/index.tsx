'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const toggleTheme = () => {
    const swappedTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(swappedTheme);
  }

  return (
    <header>
      <div className='o-container'>
        <div className='flex justify-between py-5 md:py-10'>
          <div>
            <Link href="/">
              <span className='font-black text-[28px] md:text-[32px]'>brewstory</span>
            </Link>
          </div>

          <button className='flex items-center text-2xl w-6' onClick={() => toggleTheme()}>
            {mounted && (
              theme === 'dark' ? <SunIcon className='text-yellow-sunny stroke-2'></SunIcon> : <MoonIcon className='stroke-2'></MoonIcon>
            )}
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header