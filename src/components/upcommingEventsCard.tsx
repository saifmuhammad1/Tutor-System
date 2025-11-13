import React from 'react'
import { ISession } from '../asset/dummyObjects/dummyUpcomingSession'
import { EllipsisVertical, MapPin } from 'lucide-react'

export interface UpcommingSessionProps{
  result:ISession[]
}

const UpcommingEventsCard = ({result}:UpcommingSessionProps) => {
  return (
    <div className='bg-white h-96  md:h-[85vh]  p-4 flex flex-col gap-7 rounded-sm '>
    <p className='text-primaryBlue text-xl font-semibold'>Upcoming Session this Week</p>
    <div className='flex flex-col gap-7 max-h-fit overflow-y-auto overflow-x-hidden'>
{
  result.map((obj:ISession,indexObj:number)=>
    <div className='flex justify-between  text-xs md:text-sm md:px-2  text-gray-500 gap-2'>
      <p>{indexObj +1}.</p>
      <div className='flex flex-col justify-start w-[30vh] md:w-[45vh] ' >
        <div className='flex flex-row gap-1 '>
        {obj.tutor.map((user,index)=>
       <p key={index} className='font-semibold '>
      {user.name}
      {index < obj.tutor.length - 1 ? ", " : ""}
    </p>
        )}
      
        </div>
          <div className='flex flex-row gap-5  items-center  justify-between'>
          <p className='bg-primaryBlue w-[13vh] text-white p-1 text-xs rounded-sm text-center'>{(obj.day).toUpperCase()}</p>
          <p className='text-xs md:text-sm'>{obj.date}</p>
          <div className='flex flex-row gap-1  items-center  '>
            <MapPin  className='text-skyBlue'/>
            <p>{obj.type}</p>
          </div>
        </div>
      </div>
     <div className="relative flex items-center ">
  {obj.image.map((imageObj, index) => (
    <img
      key={index}
      src={imageObj.img}
      alt={`avatar-${index}`}
      className={`md:w-12 md:h-12  w-8 h-8 rounded-full border-2 border-white object-cover
        ${index !== 0 ? '-ml-4' : ''}`}
    />
  ))}
</div>
<div className='hidden  md:flex  items-center cursor-pointer'>
<EllipsisVertical />
</div>


    </div>
  )
}
    </div>
    </div>
  )
}

export default UpcommingEventsCard