import React from 'react'
import SideNav from './_components/SideNav';
import DashboardHeader from './_components/DashboardHeader';

function DashboardLayout({children}) {
    console.log(SideNav); // Check what is being imported
  return (
    <React.Fragment>
      <div className='fixed md:w-64 hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-64'> 
        <DashboardHeader />
        {children}
      </div>
    </React.Fragment>
  )
}

export default DashboardLayout