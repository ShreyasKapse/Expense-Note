import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='p-3 flex justify-between items-center shadow-md'
    style={{
      height: '75px'}}>
        <Image src="./logo.svg" 
        alt="logo" 
        width={200}
        height={10}
        style={{ mixBlendMode: "multiply" }} //to transparent the logo background white
        />
        <Button className="bg-primary hover:bg-red-600">Get Started</Button>

    </div>
  )
}

export default Header