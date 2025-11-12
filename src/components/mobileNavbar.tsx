import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { ArrowDownToLine, TextAlignJustify, X } from 'lucide-react'
import React, { useState } from 'react'


const MobileNavbarDrawer = () => {
 const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md  px-2.5 py-1.5 text-sm font-semibold  inset-ring inset-ring-white/5  p-1 text-gray-600 dark:text-white bg:none "
      >
 <TextAlignJustify />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-white text-gray-600 dark:text-white dark:bg-slate-950 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <X  aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="relative flex h-full flex-col overflow-y-auto py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px bg-white text-gray-600 dark:text-white dark:bg-slate-950 ">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold ">SM</DialogTitle>
                  </div>
   <div className=' flex flex-col space-y-2 text-start text-gray-600 p-4'>

      <a href="">About</a>
        <a href="">Work</a>
          <a href="">Testimonial</a>
            <a href="">Contact</a>
        

               <button
className='bg-black text-white dark:bg-white dark:text-black rounded-xl flex gap-3 p-2'
         >
        <ArrowDownToLine />
        Resume
         </button>
         
      </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default MobileNavbarDrawer