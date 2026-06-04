import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categoryColors = {
  Adventure: "bg-green-600",
  Luxury: "bg-pink-600",
  Nature: "bg-lime-500 text-black",
  Culture: "bg-orange-500",
  City: "bg-purple-500",
  Cultural: "bg-yellow-500 text-black",
  Beach: "bg-cyan-500",
};
const DestinationCard = ({ item }) => {
  const { destinationName, description, imageURL, priceUSD, category } = item;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300 flex flex-col">
      <div className="relative overflow-hidden h-64">
        <Image
          src={item.imageURL}
          alt={item.destinationName}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
          width={500}
          height={300}
        />

        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm text-white font-semibold ${categoryColors[item.category]}`}
        >
          {item.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-black">
            {item.destinationName}
          </h2>

          <div className="flex items-center gap-1 text-orange-500">
            ⭐<span>{item.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
          {item.description}
        </p>

        <div className="border-t pt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Starting From</p>

            <h3 className="text-2xl font-bold text-lime-700">
              ${item.priceUSD}
            </h3>
          </div>
          <Link href={`/destinations/${item._id}`}>
            <Button className="bg-orange-400 rounded-xl hover:scale-110 transition">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
