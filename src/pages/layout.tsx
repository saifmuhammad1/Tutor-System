import React, { ReactNode, useEffect } from 'react'
import Navbar from '../components/navbar';
import { useNotification } from '../hooks/notification';
import { useLocation } from 'react-router-dom';

import img from "../asset/image/profile1.jpg"
import NotificationPanel from '../components/notificationPanel';
interface ILayout {
  children: ReactNode; 
}


const Layout = ({children}:ILayout) => {
    const { notify, Notification } = useNotification()

const location=useLocation()



useEffect(()=>{

setTimeout(()=>{
notify(dummyNotification,"success")
},3000)


  
},[location.pathname==="/"])












  return (
    <><>
      <Navbar />
      <NotificationPanel message={dummyNotification}/>
      <div>
        {children}
      </div>
    </><Notification /></>
  )
}

export default Layout


export const dummyNotification={
        name: "John Doe",
        url: "https://example.com/profile",
        description: "You have a new follower!",
        img: img,
          client: "Twitter",
  date: "Nov 12, 2025",
  time: "10:45 AM - 11:45 AM ",
      }
