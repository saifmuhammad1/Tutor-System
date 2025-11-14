import React from "react";
import { ISession } from "../asset/dummyObjects/dummyUpcomingSession";
import { EllipsisVertical, MapPin } from "lucide-react";

export interface UpcommingSessionProps {
  result: ISession[];
}

const UpcommingEventsCard = ({ result }: UpcommingSessionProps) => {
  return (
    <div className="bg-white h-96  md:h-[85vh]  p-4 flex flex-col gap-7 rounded-lg border md:border-none border-skyBlue">
      <p className="text-primaryBlue text-xl font-semibold">
        Upcoming Session this Week
      </p>
      <div className="flex flex-col gap-7 max-h-fit overflow-y-auto overflow-x-hidden">
        {result.map((obj: ISession, indexObj: number) => (
          <div className="grid grid-cols-12 text-xs md:text-sm   text-gray-500 transition duration-1000 hover:border-r-2  ">
            <div className="col-span-1 ">
              <p>{indexObj + 1}.</p>
            </div>
            <div className="flex flex-col justify-start col-span-8 md:col-span-7 ">
              <div className="flex flex-row gap-1 ">
                {obj.tutor.map((user, index) => (
                  <p key={index} className="font-semibold ">
                    {user.name}
                    {index < obj.tutor.length - 1 ? ", " : ""}
                  </p>
                ))}
              </div>
              <div className="flex flex-row gap-5  items-center justify-between text-xs">
                <p className="bg-primaryBlue w-fit text-white p-1 rounded-sm text-center">
                  {obj.day}
                </p>
                <p>{obj.date}</p>
                <div className="flex flex-row gap-1  items-center  ">
                  <MapPin className="text-skyBlue" size={20} />
                  <p>{obj.type}</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center col-span-3 md:col-span-3 ">
              {obj.image.map((imageObj, index) => (
                <img
                  key={index}
                  src={imageObj.img}
                  alt={`avatar-${index}`}
                  className={`md:w-12 md:h-12  w-10 h-10 rounded-full border-2 border-white object-cover
        ${index !== 0 ? "-ml-4" : ""}`}
                />
              ))}
            </div>
            <div className="hidden  md:flex  items-center cursor-pointer col-span-1 hover:text-primaryBlue">
              <EllipsisVertical />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcommingEventsCard;
