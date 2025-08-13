import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='fixed z-50 w-full px-6 py-4 flex-between bg-dark-1 lg:px-10'>
      <Link href="/" className='flex items-center gap-1' >
        <Image src="/icons/logo.svg" width={32} height={32} alt='Xoom logo' className='max-sm:size-10' />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Doom</p>
      </Link>
      <div className='gap-5 flex-between'>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar