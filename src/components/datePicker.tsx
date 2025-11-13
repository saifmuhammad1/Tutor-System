"use client"

import React, { useState } from "react"

interface DatePickerProps {
  onSelectDate?: (date: Date) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() // 0-11

  const startDay = new Date(year, month, 1).getDay() // 0-6
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const handleSelectDate = (day: number) => {
    const date = new Date(year, month, day)
    setSelectedDate(date)
    onSelectDate?.(date)
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="p-2 border rounded-sm w-full bg-white  text-sm  text-gray-600" >
      <div className="flex justify-between items-center mb-2 ">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 rounded hover:bg-gray-200"
        >
          ←
        </button>
        <div className="font-semibold">
          {monthNames[month]} {year}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 rounded hover:bg-gray-200"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-medium mb-1">
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => handleSelectDate(day)}
            className={`p-1 rounded hover:bg-primaryBlue hover:text-white ${
              selectedDate &&
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === month &&
              selectedDate.getFullYear() === year
                ? " text-primaryBlue"
                : ""
            }`}
          >
            {day}
          </button>
        ))}
      </div>

    
    </div>
  )
}
