
import Image from 'next/image'
import React from 'react'

const LoginPageLayout = ({children}) => {
  return (
    <div>

    <div className='grid md:grid-cols-[1fr_2fr] lg:grid-cols-2 h-screen w-full '>
    <div className='w-full h-full flex justify-center items-center relative hidden md:flex'>
      <Image src="/mubleyl.jpg"
        fill
        alt='mobile-image'
        className='object-cover'
      />
    </div>
    {children}
    </div>
    </div>
  )
}

export default LoginPageLayout