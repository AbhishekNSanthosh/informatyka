"use client";

import React, { useEffect, useState } from "react";
import TitleBar from "@components/TitleBar";
import EventDetailPage from "./components/EventDetailPage";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { db } from "../../firebase/firebaseConfig";
import Image from "next/image";
import Link from "next/link";
import SkeletonLoader from "./components/Skeleton";

interface Contact {
  name: string;
  no: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  message: string;
  imgUrl: string;
  condition: string;
  contact: Contact[];
  mode: string;
  date: string;
  time: string;
  registrationLink: string;
  guidelinesLink: string;
}

export default function EventDetails() {
  const { eventId } = useParams(); // Get the event ID from Next.js router query
  const [event, setEvent] = useState<Event | null>(null); // State to hold the event data
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true); // State to track if registration is open

  // Function to format date from dd-mm-yyyy to dd/mm/yyyy
  const formatDate = (date: string) => {
    const [day, month, year] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  // Function to convert 24-hour time to 12-hour time with AM/PM
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    let hourNum = parseInt(hour, 10);
    const suffix = hourNum >= 12 ? "PM" : "AM";
    if (hourNum > 12) {
      hourNum -= 12;
    } else if (hourNum === 0) {
      hourNum = 12;
    }
    return `${hourNum}:${minute} ${suffix}`;
  };

  useEffect(() => {
    const fetchEvent = async () => {
      if (typeof eventId === "string") {
        const eventDocRef = doc(db, "events", eventId); // Reference to the event document
        try {
          const eventDocSnapshot = await getDoc(eventDocRef); // Fetch the document snapshot

          if (eventDocSnapshot.exists()) {
            const eventData = {
              id: eventDocSnapshot.id,
              ...eventDocSnapshot.data(),
              date: formatDate(eventDocSnapshot.data().date), // Format date assuming it's in dd-mm-yyyy format
              time: formatTime(eventDocSnapshot.data().time), // Format time assuming it's in hh:mm format
            } as Event; // Cast the data to Event type

            setEvent(eventData); // Set the event data in state

            // Check if registration should be open
            const currentDate = new Date();
            const eventDateTime = new Date(
              `${eventData.date} ${eventData.time}`
            );
            if (currentDate > eventDateTime) {
              setIsRegistrationOpen(false); // Close registration if current date is greater than event date
            }
          } else {
          }
        } catch (error) {}
      }
    };

    fetchEvent();
  }, [eventId]); // Dependency array to re-run effect when eventId changes
  // Dependency array to re-run effect when eventId changes

  return (
    <div className="px-[5vw] py-[2rem] pb-16 dark:bg-black-100">
      <div className="flex flex-col gap-14">
        <TitleBar title="Event Details" />
        {event ? (
          <EventDetailPage
            event={event}
            isRegistrationOpen={isRegistrationOpen}
          />
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  );
}
