import React from 'react'

export interface IDummyProgressCards{
  id:number;
  count:number;
  type:"upcomming"|"pending"|"completed";
  des:string
}


interface ProgressCardsProps {
  value: IDummyProgressCards[];
}


const colour={
  upcomming:"#009ba7",
  pending:"#afafaf",
  completed:"#5ce1ea"
}

const ProgressCards = ({value}:ProgressCardsProps) => {
  return (
  <div className='flex flex-col md:flex-row justify-evenly gap-2 '>
{value.map((obj:IDummyProgressCards)=>
 <div
          key={obj.id}
          className=" md:w-72 rounded-md p-4 text-white flex flex-col items-start justify-between shadow-md"
          style={{ backgroundColor: colour[obj.type] }}
        >

          <p className="text-sm text-white font-semibold break-words whitespace-normal">{obj.des}</p>
          <span className="text-3xl font-bold">{obj.count}</span>
        </div>

)

}
  </div>
  )
}

export default ProgressCards