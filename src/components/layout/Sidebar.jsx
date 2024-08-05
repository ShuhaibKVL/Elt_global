import React from 'react'
import Logo from '../specific/sidebar/Logo'
import Profile from '../specific/Profile'
import Tab from '../specific/Tab'
import settingIcon from '../../assets/images/icons/settings.png'
import moreIcon from '../../assets/images/icons/Union.png'
import fileIcon from '../../assets/images/icons/file-text.png'
import bar_chart from '../../assets/images/icons/bar-chart-2.png'
import userIcon from '../../assets/images/icons/Users Outline.png'
import rupeeIcon from '../../assets/images/icons/Rupees.png'

export default function Sidebar() {
    return (
    <div className='w-[320px] h-max-[1080px] border-r-2 bg-white p-5 hidden md:block'>
        <Logo />
        <Profile />
        <section className='tabs'>
        <div className='flex-1 gap-3 pt-5 items-center justify-evenly' >
            <Tab  type="primary" title="Dashboard" image={moreIcon} font="font-semibold" />
            <Tab  title="All Classes" image={userIcon} />
            <Tab  title="Assignments" image={fileIcon} />
            <Tab  title="Performance" image={bar_chart} />
            <Tab  title="Fee Details" image={rupeeIcon} />
            <Tab  title="Settings" image={settingIcon} />
        </div>
        </section>
    </div> 
    )
}
