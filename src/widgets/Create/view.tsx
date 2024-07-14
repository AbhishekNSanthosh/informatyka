import dynamic from 'next/dynamic';
import React from 'react'
const CreateEventComponent = dynamic(() => import("@widgets/Create/components/CreateComponent"), {
  ssr: false,
});

export default function CreateEventView() {
  return (
    <CreateEventComponent/>
  )
}
