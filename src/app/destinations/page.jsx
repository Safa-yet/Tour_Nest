import DestinationCard from '@/Component/DestinationCard';
import { getApi } from '@/lib/GetApi';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AllDestination = async() => {
        const data = await getApi();
    return (
       <>
       
         <header className="relative h-[500px]">
        <Image
        width={1000}
        height={800}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqGxErWX_zpUmmZ6sMzQLzA_QlHrP6Y53j-lxlGTJJvbXBeNYMqCsDzC1R4RUuUU4w36m7RP2cTqKSbjAyM7Dy7WX0QrPU89lncC4qvhzCYIsN9fiGhpO2Q8MfOk_zG3S1alDQsQirLPVzBT_Kpu-w7PvBkpoHkpDEie7cr2XwMHmyezokIc-MXvgArhP9H6Kq2wg0GeYgpEmUaYN_d8EFnj5G_LmPs605CXRQ0OeE6Z8hasEYeblTPOt6I8OUIWjxx_heScMyag"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Explore Our Packages
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Curated journeys designed for the bold. Find your next adventure
            with Gotur.
          </p>
        </div>
      </header>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-6 justify-between">
        <div className="flex flex-wrap gap-4">
          {["All", "Adventure", "Luxury", "Nature", "Culture", "Cultural", "Beach"].map(
            (item, index) => (
              <Button
                key={index}
                className={`px-4 py-2 rounded-full border transition ${
                  index === 0
                    ? "bg-lime-700 text-white border-lime-700"
                    : "bg-white text-gray-500 hover:border-lime-700 hover:text-lime-700"
                }`}
              >
                {item}
              </Button>
            )
          )}
        </div>

        <input
          type="text"
          placeholder="Search destination..."
          className="w-full lg:w-80 px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-lime-500"
        />
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {data.map((item) => (
         <DestinationCard key={item._id} item={item} />
          ))}
        </div>
      </section>

        </>
    );
};

export default AllDestination;