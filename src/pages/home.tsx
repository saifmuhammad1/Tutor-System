import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProgressCards, { IDummyProgressCards } from '../components/progressCards';
import { DatePicker } from '../components/datePicker';
import UpcommingEventsCard from '../components/upcommingEventsCard';
import { dummyUpcomingSession } from '../asset/dummyObjects/dummyUpcomingSession';
import CompletedEventsCard from '../components/completedEventsCard';
import { StepProgress } from '../components/progressBAr';


const Home = () => {
const [showCalendar, setShowCalendar] = useState(false)
  const location = useLocation();

  const [currentStep, setCurrentStep] = useState(0);


  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.setItem("name", "saif");
    }
  }, [location.pathname]);
  return (
    <div className='w-screen  grid grid-cols-1 md:grid-cols-4 px-5 py-1 gap-5 md:gap-0' >

      <div className=' flex flex-col gap-2 md:col-span-3'>

<ProgressCards value={dummyProgress}/>
<div className='md:px-6 grid md:grid-cols-2  grid-cols-1 gap-5'>
<UpcommingEventsCard result={dummyUpcomingSession}/>
<CompletedEventsCard result={dummyUpcomingSession}/>
</div>
      </div>
      <div className=' flex flex-col gap-2  justify-end md:px-5' >
        <div id="date" className='flex flex-col gap-2 justify-center'>

          
    <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="px-4 py-2 bg-skyBlue w-full rounded-sm text-white  mb-2 md:hidden "
      >
        {showCalendar ? "Close Calendar" : "See Calendar"}
      </button>

  
      <div className={`${showCalendar ? "block" : "hidden"} md:block`}>
        <DatePicker onSelectDate={(date) => console.log("Selected:", date)} />
      </div>
    </div>
 <StepProgress steps={steps} currentStep={currentStep} />
       </div>
      
    </div>
  )
}

export default Home


const dummyProgress :IDummyProgressCards[]=[
  {
    id:1,
    count:20,
    des:"Upcomming Tutorial",
    type:"upcomming"
  },
    {
    id:2,
    count:18,
    des:"Number of Tutorial Tracked Last Month",
    type:"completed"
  },
    {
    id:3,
    count:10,
    des:"Pending Tutorial Request",
    type:"pending"
  }
]

const steps = [
  { 
    label: "Session", 
    desc: "Your first mentoring session has been .", 
    date: "Jan " 
  },
  { 
    label: "Reschedule", 
    desc: "Session timing was updated to better suit your availability",
    date:"jan"
  },
  { 
    label: "Admin Review", 
    desc: "Admin reviewed your session feedback .", 
    date: "Jan " 
  },
  { 
    label: "Completed", 
    desc: "All sessions successfully completed.", 
    date: "Jan " 
  },
];
