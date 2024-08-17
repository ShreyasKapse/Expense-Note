import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='p-3 flex justify-between items-center shadow-sm'
    style={{ height: "75px" }}>
        <Image src="./logo.svg" 
        alt="logo" 
        width={200} 
        height={50}
        />
        <Button>Get Started</Button>

    </div>
  )
}

export default Header