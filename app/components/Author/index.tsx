import React from 'react'

import ImageWithFallback from '../Image'

function Author() {
  return (
    <>
      <div className='flex items-center gap-x-4'>
        <div className='w-[52px] h-[52px]'>
          <div className='w-full h-full'>
            <ImageWithFallback
              src="/images/avatar.png"
              alt="avatar"
              className="h-full w-auto"
              width={140}
              height={105} />
          </div>
        </div>
        <div>
          <p className='text-xs md:text-base'>
            A blog maintained by  <span className='text-blue-primary dark:text-blue-secondary underline'>anonymous</span>.
            <br /> Talk randomly about anything.
          </p>
        </div>
      </div>
    </>
  )
}

export default Author