
import { useState } from "react"
import { Button, Transition } from "@headlessui/react"
import { Check, Clock, Pin, X } from "lucide-react";



export interface IuserNotification{
    name:string;
    url:string;
    description:string;
    img:string;
    clinet?:string;
    date ?:string;
    time?:string;
}
export function useNotification() {
  const [show, setShow] = useState(false)
const [message, setMessage] = useState<IuserNotification>()
  const [type, setType] = useState<"success" | "error" | "info">("info")

  const notify = (msg:IuserNotification, type: "success" | "error" | "info" = "info") => {
    setMessage(msg)
    setType(type)
    setShow(true )
    setTimeout(() => setShow(false), 60000)
  }
  const closeNotify=()=>{
      setShow(false )
  }

  const Notification = () => (
    <Transition
      show={show}
      enter="transition transform duration-300"
      enterFrom="translate-y-2 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-md text-white 
`}
      >
         <div className=' grid grid-cols-12 px-5  bg-black md:bg-lightBlue m-2 py-2'>
    

        <div className='  gap-2  grid-cols-7 col-span-11  w-full '>
  <div className="grid md:grid-cols-8 grid-cols-5  gap-2  w-full p-3">

  <div className="flex col-span-1 items-start  md:justify-center">
    <img
      src={message?.img}
      alt={message?.name}
      className="md:w-12 w-16 rounded-full"
    />
  </div>

  <div className='md:col-span-7 grid md:grid-cols-7 grid-cols-1 col-span-4 items-center gap-2'>


  <div className="md:col-span-3 flex flex-col justify-center ">
    <p className="text-primaryBlue font-semibold">{message?.name}</p>
    <div className="flex md:flex-row flex-col text-sm md:text-base text-gray-600 justify-between gap-2">
      <p>Client: {message?.clinet}</p>
      <p>Date: {message?.date}</p>
      <p>Time: {message?.time}</p>
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
      </div>
    </Transition>
  )

  return { notify, Notification ,closeNotify}
}
