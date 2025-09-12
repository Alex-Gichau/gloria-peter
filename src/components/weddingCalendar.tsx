"use client"

import React from "react"
import { Calendar } from "./ui/calendar"

const calendar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 12, 5))

  return (
    <div>
        <Calendar 
        animate
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
        
        />
        
    </div>
  )
}

export default calendar