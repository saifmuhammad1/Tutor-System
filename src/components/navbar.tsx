import { Button, Dialog,  DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import {  Bell, TextAlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import logo from "../asset/image/logo.png"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navMainRoutes } from '../routes/pagesRoutes'


const Navbar = () => {
 
const location=useLocation()
     const [open, setOpen] = useState(false)

     const userData=localStorage.getItem("name") ||"User";
  

  return (
    <><nav className='bg-white '>
          <div className='border-b '>
              <div className='grid grid-cols-2 md:grid-cols-5 px-5 py-1 '>
                  <div className='col-span-1 flex items-center  gap-3'>
                      <img src={logo} alt="componyLogo" className='w-10' />
                      <p className='font-bold'>Tutor One
                      </p>
                  </div>
                  <div className=' col-span-3 hidden  md:flex  flex-row gap-10 items-center  '>
                      <Link to={'/home'} className='hover:underline'>K-12 videos</Link>
                      <Link to={'/'} className='hover:underline'>Postcast</Link>
                      <Link to={'/'} className='hover:underline'>FAQ</Link>
                      <Link to={'/'} className='hover:underline'>Help & Support</Link>
                  </div>



                  <div className=' flex justify-end'>
                      <div className='  hidden md:flex flex-row gap-5 items-center'>

                          <p className='cursor-pointer rounded-full bg-primaryBlue  w-10 h-10 flex items-center justify-center text-white font-bold'>{userData[0].toUpperCase()}</p>
                          <div className='flex items-end'>
                              <p className='text-gray-400'>Hello, </p>
                              <p className='text-black font-bold text-xl'>{userData}</p>
                          </div>

                          <Bell className='text-primaryBlue text-2xl cursor-pointer'     />

                      </div>



                      <Button
                          onClick={() => setOpen(!open)}
                          className="flex items-center  md:hidden text-end "
                      >
                                 {open ? <X className="w-6 h-6" /> : <TextAlignJustify className="w-6 h-6" />}
                      </Button>

                  </div>
              </div>

          </div>
          <div className='hidden md:grid grid-cols-5'>



<div className='col-span-1 flex items-center justify-center font-bold px-5 py-2'>
<p>{navMainRoutes.find((obj)=>obj.url===location.pathname)?.Desc}</p>
                </div>


                <div className='col-span-4  flex flex-row items-center gap-12 '>
            {navMainRoutes.map((obj)=>
            

                     <NavLink
          key={obj.url}
          to={obj.url}
          className={({ isActive }) =>
            `relative transition-colors flex gap-2  ${
              isActive
                ? "text-primaryBlue font-normal active-link  border-b-2 border-primaryBlue py-2  transition-all duration-300  "
                : "text-gray-600 hover:text-primaryBlue "
            }`
          }
        >

         {obj.icon} {obj.title}
        </NavLink>
   
                 
            )}

</div>

          </div>




      </nav>
      <Dialog open={open} onClose={setOpen} className="relative z-10">


              <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10 sm:pr-16">
                          <DialogPanel
                              transition
                              className="pointer-events-auto relative w-60 max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700 block md:hidden"
                          >
                            
                              <div className=" gap-5 relative flex h-full flex-col overflow-y-auto py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px bg-white ">
                                  <div className="px-4 sm:px-6">
                                      <DialogTitle className="text-base font-semibold flex items-center  gap-3 ">

                                          <img src={logo} alt="componyLogo" className='w-10' />
                      <p className='font-bold'>Tutor One
                      </p>
                                      </DialogTitle>
                                  </div>
<div className='px-8 flex flex-col gap-12'>
                                           <div className='  flex flex-row gap-5 items-center '>

                          <p className='rounded-full bg-primaryBlue  w-10 h-10 flex items-center justify-center text-white font-bold'>{userData[0].toUpperCase()}</p>
                          <div className='flex'>
                              <p className='text-gray-400'>Hellow, </p>
                              <p className='text-black font-bold'>{userData}</p>
                          </div>


                      </div>

<div className='flex flex-col gap-8 '>
          {navMainRoutes.map((obj)=>
            

                     <NavLink
          key={obj.url}
          to={obj.url}
          className={({ isActive }) =>
            `relative transition-colors flex  gap-2 text-xl ${
              isActive
                ? "text-primaryBlue font-normal active-link    "
                : "text-gray-600 hover:text-primaryBlue "
            }`
          }
        >

         {obj.icon} {obj.title}
        </NavLink>
   
                 
            )}

</div>

                                               <div className=' flex flex-col gap-2 '>
                      <Link to={'/home'} className='hover:underline'>K-12 videos</Link>
                      <Link to={'/'} className='hover:underline'>Postcast</Link>
                      <Link to={'/'} className='hover:underline'>FAQ</Link>
                      <Link to={'/'} className='hover:underline'>Help & Support</Link>
                  </div>
                      

              </div>


                              </div>
                          </DialogPanel>
                      </div>
                  </div>
              </div>
          </Dialog></>
          
  )
}

export default Navbar