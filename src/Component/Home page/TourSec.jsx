import { getApi } from '@/lib/GetApi';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import DestinationCard from '../DestinationCard';
;

const TourSec =async () => {
    const data =await getApi();
   
    console.log(data);
    return (
        <>
        
        
        <section className=" mx-auto px-6  pb-20">
             <h2 className="font-serif text-3xl md:text-6xl  mb-8">
                Our Feature <span className="text-[#b1f661] italic ">Destinations</span>
              </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {data.slice(0, 4).map((item) => (
<DestinationCard key={item._id} item={item} />
          ))}
        </div>
        <Link href="/destinations" className="flex justify-center mt-10">
          <Button className="bg-orange-400 hover:bg-orange-500">
            See More
          </Button>
        </Link>
      </section>
        </>
    );
};

export default TourSec;