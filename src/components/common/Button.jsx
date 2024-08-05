import { useState } from 'react'
import externalIcon from '../../assets/images/icons/external-link.png'

export default function Button({tag , bg , hover}) {
    const [ tager , setTag ] =useState(tag)

    return (
    <button className={`px-[10px] py-[10px] w-[110px] h-[50px] rounded-[7px] text-white ${bg} rounded-md ${hover} flex items-center justify-evenly text-[15px]`}>
        {tager}
        <img className='w-5 h-5' src={externalIcon} alt="Loading" />
    </button>
    )
}
