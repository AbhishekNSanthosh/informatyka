
"use client"
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'; // Adjust the path based on your Firebase configuration
import Image from 'next/image';
import TitleBar from '@components/TitleBar';
import EvenList from './components/EvenList';

interface Event {
  id: string;
  title: string; // Adjust based on your actual data structure
  description: string; // Adjust based on your actual data structure
  imgUrl:string;
}

export default function EventsPageView() {
  const [events, setEvents] = useState<Event[]>([]); // Specify the type as Event[]

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollectionRef = collection(db, 'events');
      try {
        const querySnapshot = await getDocs(eventsCollectionRef);
        const eventData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as Event[]; // Cast the data to Event[]

        setEvents(eventData);
    } catch (error) {
        console.error('Error fetching events: ', error);
    }
};

fetchEvents();
}, []);

console.log(events)
  return (
    <div className='px-[5vw] py-[2rem]'>
      <div className="">
        <TitleBar title='Events'/>
        <EvenList eventList={events}/>
      </div>
    </div>
  );
}
