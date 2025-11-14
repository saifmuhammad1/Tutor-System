"use client";

import React from "react";
import { Link } from "react-router-dom";

interface StepProgressProps {
  steps: { label: string; desc: string; date: string }[];
  currentStep: number;
}

export function StepProgress({ steps, currentStep }: StepProgressProps) {
  return (
    <div className=" hidden relative md:flex flex-col items-start gap-6 bg-white p-2 rounded-sm border-t-2 border-skyBlue overflow-x-hidden ">
      <div className="text-primaryBlue text-2xl ">Notice Board</div>
      <div className="absolute left-3 top-0 bottom-0 w-1 " />

      {steps.map((step, index) => {
        const isCompleted = index <= currentStep;

        return (
          <div key={index} className="relative flex items-center z-10 ">
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 font-semibold 
              ${
                isCompleted
                  ? "bg-primaryBlue border-primaryBlue"
                  : "bg-white border-primaryBlue text-gray-400"
              }`}
            />

            {index < steps.length - 1 && (
              <div
                className={`absolute left-[8px] top-9 h-[calc(100%+16px)]  w-1 rounded-full  bg-primaryBlue `}
              ></div>
            )}

            <span
              className={`ml-4 text-sm font-medium flex flex-row justify-between w-[30vh] `}
            >
              <div className="flex-col ">
                <p className="text-black">{step.label}</p>
                <p className="text-gray-400 text-xs">{step.desc}</p>
              </div>
              <div className="text-gray-400 text-xs ">{step.date}</div>
            </span>
          </div>
        );
      })}

      <Link to="/" className="text-primaryBlue text-xs underline">
        {" "}
        Go To Notification
      </Link>
    </div>
  );
}
