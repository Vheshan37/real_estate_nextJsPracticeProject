import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function Tab1() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="range"
    //   selected={date}
    //   onSelect={setDate}
      className="rounded-lg border"
    />
  );
}
