import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='mt-[120px]'>
      <div className='o-container'>
        <div className='py-6 md:py-10'>
          <p className='text-md'>
            <b>brewstory</b> - a blog which design is inspired and recreate of <Link href="https://overreacted.io/" target="_blank" className='text-pink-primary dark:text-pink-secondary underline font-bold'>overreacted.io</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer