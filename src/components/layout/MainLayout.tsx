import TopBar from '@/components/layout/TopBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout:React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className='px-20 p-5 flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout