import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import UpcomingClassesPanel from '../components/specific/dashboard/UpcomingClassesPanel'
import AssignmentPanel from '../components/specific/dashboard/AssignmentPanel'
import Additional from '../components/specific/dashboard/Additional'
import Pagination from '../components/common/PaginationComponent'
import Profile from '../components/specific/Profile'
import Navbar from '../components/specific/Navbar'

export default function Dashboard() {
    
    return (
    <div className=' flex w-full w-max-[1520px] h-[1080px] h-max-[1080px] bg-[#7b7a7a]'>
        <Sidebar />
        <div className='w-full h-full bg-[#F6F6F7]'>
            <Additional />
            <Header />
            <div className='bg-[#F6F6F7] pt-5 pr-5 pl-5'>
                <div className='flex justify-around flex-wrap md:flex-wrap'>
                    <div className=''>
                        <UpcomingClassesPanel />
                    </div>
                    <div className=''>
                        <AssignmentPanel />
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
        <Navbar />
        
    </div>
    )
}
