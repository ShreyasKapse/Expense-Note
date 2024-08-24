"use client"
import { Button } from '../../components/ui/button'
import React from 'react'
import Image from 'next/image'
import { useUser,UserButton } from '@clerk/nextjs'
import Link from 'next/link';

// Rest of the code...

function Header() {

  const {user,isSignedIn} = useUser()
  return (
    <div className='p-3 flex justify-between items-center shadow-2xl'
    style={{
      height: '75px'}}>
        <Image src="./logo.svg" 
        alt="logo" 
        width={200}
        height={10}
        style={{ mixBlendMode: "multiply" }} //to transparent the logo background white
        />
        {isSignedIn ? 
        <UserButton /> : 
        <Link href={"/sign-in"} >
          <Button className="bg-primary hover:bg-red-600 hover:text-black">Get Started</Button>
        </Link>
        }
    </div>
  )
}

export default Header