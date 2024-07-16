import EventDetails from "@widgets/EventDetails";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../../../firebase/firebaseConfig";

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

export async function generateStaticParams() {
  const eventsCollectionRef = collection(db, "events");
  const querySnapshot = await getDocs(eventsCollectionRef);
  const eventData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Event[];

  return eventData.map((post) => ({
    eventId: post.id,
  }));
}

export default function page() {
  return <EventDetails />;
}
