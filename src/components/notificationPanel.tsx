import React from 'react'
import { IuserNotification } from '../hooks/notification'
import { X } from 'lucide-react'


interface NotificationPanelProps {
  message: IuserNotification

}



const NotificationPanel = ({message}:NotificationPanelProps) => {
  return (
    <div className=' flex flex-col px-5 bg-lightBlue m-2 py-2'>
        <div className='flex justify-end'>
            <X/>
        </div>

        <div className='border'>
          <div className='border  flex flex-row '>
<img src={message.img} alt={message.name} className='w-10 rounded-full' />
<div className='border'>
<p>{message.name}</p>
  <div className='flex flex-row text-sm'>
    <p>Clinet:{message.clinet}</p>
    <p> Date :{message.date}</p>
    <p> Time :{message.time}</p>
  </div>
</div>
</div>
        </div>
    </div>
  )
}

export default NotificationPanel