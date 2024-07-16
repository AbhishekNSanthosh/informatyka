"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // Adjust the path based on your Firebase configuration
import TitleBar from "@components/TitleBar";
import EvenList from "./components/EvenList";

interface Event {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  date:string
}

export default function EventsPageView() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollectionRef = collection(db, "events");
      try {
        const querySnapshot = await getDocs(eventsCollectionRef);
        // Map Firestore documents to Event type
        const eventData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[];
  
        // Sort events by date in descending order
        eventData.sort((a, b) => {
          // Convert date strings to Date objects for comparison
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          // Sort descending (latest date first)
          return dateB.getTime() - dateA.getTime();
        });
  
        setEvents(eventData);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  }, []);
  

  return (
    <div className="px-[5vw] py-[2rem] dark:bg-black-100">
      <div className="flex flex-col gap-8">
        <TitleBar title="Events" />
        <EvenList eventList={events} isLoading={isLoading} />
      </div>
    </div>
  );
}
