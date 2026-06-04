"use client";


import { authClient } from "@/lib/auth-client";
import { DateField } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingBtn = ({ data }) => {
    const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(session,"session from booking btn");
  console.log(data);
  
  
  const {
    _id,
    
    destinationName,
    imageURL,
    priceUSD,
    category,
    duration,
    country,
  } = data;

  const [selectedDate, setSelectedDate] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = async () => {
    const bookingData = {
      destinationName,
      selectedDate: new Date(selectedDate),
      imageURL,
      priceUSD,
      category,
      duration,
      userid: user?.id,
      userEmail: user?.email,
      userName: user?.name,
      userImage: user?.image,
      destinationId: _id,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const result = await res.json();
    console.log(result);

    if (result) {
      toast.success("Booking successful!");
      setIsBooked(true);
    }
  };

  return (
    <>
      {/* Booked Button */}
      {isBooked && (
        <button className="fixed bottom-8 right-8 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-xl z-50">
          BOOKED ✅
        </button>
      )}

      {/* Booking Bar */}
      {!isBooked && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-primary/20 rounded-full p-4 flex items-center justify-between shadow-2xl">
            
            <div className="pl-6">
              <p className="text-primary-fixed-dim text-sm uppercase tracking-widest opacity-60">
                Total Cost
              </p>

              <p className="text-white text-2xl font-bold">
                ${priceUSD}
                <span className="text-sm font-normal opacity-60">
                  / person
                </span>
              </p>
            </div>

            <DateField
              className="w-[256px]"
              name="appointment-date"
              onChange={setSelectedDate}
            >
              <DateField.Group>
                <DateField.Input>
                  {(segment) => (
                    <DateField.Segment segment={segment} />
                  )}
                </DateField.Input>
              </DateField.Group>
            </DateField>

            <button
              onClick={handleBooking}
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingBtn;