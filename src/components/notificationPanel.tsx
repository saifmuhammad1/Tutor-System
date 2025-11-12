import React from 'react'
import { IuserNotification } from '../hooks/notification'
import { Check, Clock, Pin, X } from 'lucide-react'
import { Button } from '@headlessui/react'


interface NotificationPanelProps {
  message: IuserNotification

}



const NotificationPanel = ({message}:NotificationPanelProps) => {
  return (
    <div className=' grid grid-cols-12 px-5  bg-white md:bg-lightBlue m-2 py-2'>
    

        <div className='  gap-2  grid-cols-7 col-span-11  w-full '>
  <div className="grid md:grid-cols-8 grid-cols-5  gap-2  w-full p-3">

  <div className="flex col-span-1 items-start  md:justify-center">
    <img
      src={message.img}
      alt={message.name}
      className="md:w-12 w-16 rounded-full"
    />
  </div>

  <div className='md:col-span-7 grid md:grid-cols-7 grid-cols-1 col-span-4 items-center gap-2'>


  <div className="md:col-span-3 flex flex-col justify-center ">
    <p className="text-primaryBlue font-semibold">{message.name}</p>
    <div className="flex md:flex-row flex-col text-sm md:text-base text-gray-600 justify-between gap-2">
      <p>Client: {message.clinet}</p>
      <p>Date: {message.date}</p>
      <p>Time: {message.time}</p>
    </div>
  </div>


  <div className="md:col-span-4 flex flex-wrap justify-evenly gap-2">
    <Button className="flex flex-col items-center gap-1 text-sm text-primaryBlue">
      <Check className="size-6" />
      <p>Accept</p>
    </Button>

    <Button className="flex flex-col items-center gap-1 text-sm text-red-600">
      <X className="size-6" />
      Decline
    </Button>

    <Button className="flex flex-col items-center gap-1 text-sm text-gray-900">
      <Clock className="size-6" />
      Propose new time
    </Button>

    <Button className="hidden md:flex flex-col items-center gap-1 text-sm text-primaryBlue">
      <Pin className="size-6" />
      Mark as tentative
    </Button>
  </div>

</div>
</div>

        </div>
        <div className=' flex justify-end p-0 m-0'>
 <X/>
        </div>
    </div>
  )
}

export default NotificationPanel