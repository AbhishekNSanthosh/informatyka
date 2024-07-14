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
}

export default function EventsPageView() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollectionRef = collection(db, "events");
      try {
        const querySnapshot = await getDocs(eventsCollectionRef);
        const eventData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[];

        setEvents(eventData);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {}
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
