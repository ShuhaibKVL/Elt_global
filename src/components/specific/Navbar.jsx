import userIcon from '../../assets/images/icons/Users Outline.png'
import moreIcon from '../../assets/images/icons/Union.png'
import fileIcon from '../../assets/images/icons/file-text.png'
import bar_chart from '../../assets/images/icons/bar-chart-2.png'

export default function Navbar() {
    return (
    <div className='block sm:hidden fixed w-full z-10 bottom-0 h-28 bg-white border-t-2'>
        <div className='flex justify-between items-center h-full mx-4'>
        <div className="flex flex-col items-center justify-center h-full">
            <img className='bg-blue-500 p-1 rounded-sm' src={moreIcon} alt=" " />
            <p>DashBoard</p>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
        <img src={fileIcon} alt="" />
            <p>Assignment</p>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
        <img src={bar_chart} alt="" />
            <p>Perfomance</p>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
        <img src={userIcon} alt="" />
            <p>Profile</p>
        </div>
        </div>
    </div>
    )
}
