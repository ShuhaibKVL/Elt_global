import React, { useEffect } from 'react'
import Button from '../../common/Button'
import UpcominClassTable from '../UpcominClassTable'
import { classes  as classData} from '../../../utils/upcomingClassData'
import { useSelector , useDispatch } from 'react-redux';
import { setClasses, toggleBookedOnly } from '../../../redux/classSlice';

export default function UpcomingClassesPanel() {
    const dispatch = useDispatch();
    const bookedOnly = useSelector((state) => state.classes.bookedOnly)

    useEffect(() => {
        dispatch(setClasses(classData))  // Load classes data into Redux store
    },[dispatch])

    const handleCheckboxChange = () => {
        dispatch(toggleBookedOnly())
    }

    return (
    <div className='h-[829px] w-[800px] bg-white rounded-md p-4' >
        <div className='header flex items-center justify-between'>
            <div>
                <h1 className='text-[20px] font-semibold'>Upcoming classes</h1>
                <p className='font-light'>For next 7 days</p>
            </div>
            <div>
            <div className="mb-4">
            <input
            type="checkbox"
            checked={bookedOnly}
            onChange={handleCheckboxChange}
            />
            <label>Booked only</label>
            </div>
            </div>
        </div>
        <div className='table'>
            <UpcominClassTable />
        </div>
        
    </div>
    )
}
