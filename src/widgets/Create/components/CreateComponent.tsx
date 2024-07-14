"use client";

import TitleBar from "@components/TitleBar";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage} from '../../../firebase/firebaseConfig';
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";

interface Contact {
  name: string;
  no: string;
}

interface EventData {
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
  guidlinesLink: string;
}

export default function CreateEventComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [data, setData] = useState<EventData>({
    title: "",
    description: "",
    message: "",
    imgUrl: "",
    condition: "",
    contact: [
      { name: "", no: "" },
      { name: "", no: "" },
    ],
    mode: "",
    date: "",
    time: "",
    registrationLink: "",
    guidlinesLink: "",
  });
  const eventsCollectionRef = collection(db, "events");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [key, index] = name.split("-");
    if (key === "contactName" || key === "contactNo") {
      const contactIndex = parseInt(index, 10);
      setData((prevData) => {
        const updatedContacts = [...prevData.contact];
        updatedContacts[contactIndex] = {
          ...updatedContacts[contactIndex],
          [key === "contactName" ? "name" : "no"]: value,
        };
        return {
          ...prevData,
          contact: updatedContacts,
        };
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };

  const handleImageUpload = () => {
    setIsLoading(true);
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
        // Get download URL
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setIsUploaded(true);
          // Set the download URL to the imgUrl field in the state
          setData((prevData) => ({
            ...prevData,
            imgUrl: downloadURL,
          }));
          setIsLoading(false);
        });
      });
    }
    setIsLoading(false);
  };

  console.log(data);

  const createEvent = async () => {
    try {
      const res = await addDoc(eventsCollectionRef, data);
      console.log(res);
      toast.success(`Event created successfully! Document ID: ${res.id}`);
      // Clear form data
      setData({
        title: "",
        description: "",
        message: "",
        imgUrl: "",
        condition: "",
        contact: [
          { name: "", no: "" },
          { name: "", no: "" },
        ],
        mode: "",
        date: "",
        time: "",
        registrationLink: "",
        guidlinesLink: "",
      });
      setFile(null);
      setPreviewUrl(null);
      setIsUploaded(false);
    } catch (error: any) {
      console.error("Error creating event: ", error);
      toast.error(`Failed to create event. Error: ${error.message}`);
    }
  };

  return (
    <div className="px-[5vw] py-[2rem]">
      <div className="flex flex-col gap-8">
        <TitleBar title="Create Event" />
        <div className="flex gap-4">
          <div className="flex p-8 border gap-4 flex-col-reverse border-breakerDay-300 rounded-[8px] w-[30vw] h-full items-center justify-center">
            {!isUploaded && (
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*" // Accepts only image files
              />
            )}
            {previewUrl && (
              <div className="flex flex-col gap-3">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  className="mt-4 rounded-md shadow-md"
                  height={300}
                  width={300}
                />
                {!isUploaded && (
                  <button
                    onClick={handleImageUpload}
                    disabled={isLoading}
                    className="w-full p-3 rounded-[8px] bg-breakerDay-600 text-white outline-none border-none"
                  >
                    {isLoading ? "Uploading" : "Upload Image"}
                  </button>
                )}
                {isUploaded && (
                  <button className="w-full p-3 rounded-[8px] border-2 border-breakerDay-600 text-breakerDay-600 outline-none">
                    Uploaded
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-full gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Title"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="description"
                  value={data.description}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Description"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="message"
                  value={data.message}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Message"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="condition"
                  value={data.condition}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Condition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="">Contact 1</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="contactName-0"
                    value={data.contact[0].name}
                    onChange={handleInputChange}
                    className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                    placeholder="Contact (1) Name"
                  />
                  <input
                    type="text"
                    name="contactNo-0"
                    value={data.contact[0].no}
                    onChange={handleInputChange}
                    className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                    placeholder="Contact (1) No."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="">Contact 2</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="contactName-1"
                    value={data.contact[1].name}
                    onChange={handleInputChange}
                    className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                    placeholder="Contact (2) Name"
                  />
                  <input
                    type="text"
                    name="contactNo-1"
                    value={data.contact[1].no}
                    onChange={handleInputChange}
                    className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                    placeholder="Contact (2) No."
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="mode"
                  value={data.mode}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Mode"
                />
              </div>
              <div className="w-full">
                <input
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Date"
                />
              </div>
              <div className="w-full">
                <input
                  type="time"
                  name="time"
                  value={data.time}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Time"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="registrationLink"
                  value={data.registrationLink}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Registration Link"
                />
                <span className="text-sm">
                  Link should be in https:bitly.in/something
                </span>
              </div>
              <div>
                <input
                  type="text"
                  name="guidlinesLink"
                  value={data.guidlinesLink}
                  onChange={handleInputChange}
                  className="px-1 py-2 border rounded-[8px] border-breakerDay-600 outline-none w-full"
                  placeholder="Guidelines Link, if any"
                />
                <span className="text-sm">Guidlines link if any</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => {
              if (isUploaded) {
                createEvent();
              } else {
                toast.error("Please upload an image");
              }
            }}
            className="w-[62vw] py-3 rounded-[10px] items-center justify-center flex border-none  text-white bg-breakerDay-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
