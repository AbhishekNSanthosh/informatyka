import React from "react";
import EventItem from "./EventItem";
interface eventListProps {
  eventList: any;
}
export default function EvenList(props: eventListProps) {
  return (
    <div className="flex flex-nowrap">
      {props?.eventList?.map((event:any, index:number) => (
        <EventItem event={event}/>
      ))}
    </div>
  );
}
