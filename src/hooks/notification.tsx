
import { useState } from "react"
import { Transition } from "@headlessui/react"



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
        ${type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"}`}
      >
        {message?.name}
      </div>
    </Transition>
  )

  return { notify, Notification ,closeNotify}
}
