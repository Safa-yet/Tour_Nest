import CancelBook from "@/Component/Shared ui/CancelBook";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const BookingList = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/${user?.id}`);

  const data = await res.json();


console.log(session);


  return (
    <div className="min-h-screen bg-[#0f172a] px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-xl">Hello, {session?.user?.name}</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Booking List
          </h1>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Here you can see all your bookings.
          </p>

          <p className="text-cyan-400 mt-3 font-medium text-sm md:text-base">
            {data.length} bookings found
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {data.map((booking) => (
            <div
              key={booking._id}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:scale-[1.01] transition-all duration-300"
            >
              
              {/* Main Grid */}
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                
                {/* Image */}
                <div className="h-[220px] md:h-full">
                  <img
                    src={booking.imageURL}
                    alt={booking.destinationName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 flex flex-col justify-between">
                  
                  {/* Top */}
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      
                      <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                          {booking.destinationName}
                        </h2>

                        <p className="text-cyan-400 mt-1 text-sm md:text-base">
                          {booking.category}
                        </p>
                      </div>

                      <span className="w-fit px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-green-500/20 text-green-400">
                        Confirmed
                      </span>
                    </div>

                    {/* Info Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                      
                      <div className="bg-white/5 p-3 rounded-2xl">
                        <p className="text-gray-400 text-xs md:text-sm">
                          Duration
                        </p>

                        <h3 className="text-white text-base md:text-lg font-semibold mt-1">
                          {booking.duration}
                        </h3>
                      </div>

                      <div className="bg-white/5 p-3 rounded-2xl">
                        <p className="text-gray-400 text-xs md:text-sm">
                          Price
                        </p>

                        <h3 className="text-white text-base md:text-lg font-semibold mt-1">
                          ${booking.priceUSD}
                        </h3>
                      </div>

                      <div className="bg-white/5 p-3 rounded-2xl">
                        <p className="text-gray-400 text-xs md:text-sm">
                          Category
                        </p>

                        <h3 className="text-white text-base md:text-lg font-semibold mt-1">
                          {booking.category}
                        </h3>
                      </div>

                      <div className="bg-white/5 p-3 rounded-2xl">
                        <p className="text-gray-400 text-xs md:text-sm">
                          Booking ID
                        </p>

                        <h3 className="text-white text-xs md:text-sm font-semibold mt-1 break-all">
                          {booking._id}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    
                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition">
                      View Details
                    </button>

                    <button className="px-5 py-2.5  border border-white/20 text-white text-sm hover:bg-white/10 transition">
                      Download Ticket
                    </button>

                    <CancelBook bookingID={booking._id} />

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingList;