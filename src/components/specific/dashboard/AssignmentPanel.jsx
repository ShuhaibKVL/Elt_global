import React from 'react'
import { assignmentData } from '../../../utils/assignmentData'

export default function AssignmentPanel() {
  return (
    <div className='hidden md:block bg-white h-[829px] w-[650px] rounded-md p-3'>
      <h1>Assignments ({assignmentData.length})</h1>
      {assignmentData.map((item) => {
        return (
        <div key={item._id} className='border rounded-md w-full h-[60px] p-2 mt-2 '>
          <h2 className='font-semibold'>{item.title}</h2>
          <p className='font-light'>{item.sb}</p>
        </div>
        )
      })}
    </div>
  )
}


