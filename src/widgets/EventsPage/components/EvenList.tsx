import React from "react";
import SkeletonLoader from "@components/Skeleton";
import dynamic from "next/dynamic";
import EventItem from "./EventItem";
interface EventListProps {
  eventList: any[];
  isLoading: boolean;
}

export default function EvenList(props: EventListProps) {
  const { eventList, isLoading } = props;

  if (isLoading) {
    // Display skeletons while loading
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
      </div>
    );
  }

  // Once data is loaded, render event items
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {eventList.map((event: any, index: number) => (
        <EventItem key={index} event={event} />
      ))}
    </div>
  );
}
