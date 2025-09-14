import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href="/" className='flex items-center gap-1'> 
            <Image src="/assets/icons/logo.png" width={20} height={30} alt="logo" className='object-contain'/>
            {/* <Image src="/assets/icons/cost1.png" width={90} height={90} alt="costlyzer"/> */}
            
            </Link>
            
        </nav>
    </header>
  )
}

export default NavBar