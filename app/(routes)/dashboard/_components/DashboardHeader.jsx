import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-4 shadow-sm border-b flex justify-between'>
        <div>
            {/* search bar */}
        </div>
        <div>
            <UserButton />
        </div>
    </div>
  )
}

export default DashboardHeader