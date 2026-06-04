import BookingBtn from "@/Component/Shared ui/BookingBtn";
import MagneticButton from "@/Component/Shared ui/MagneticButton";
import { getSingleApi } from "@/lib/GetApi";
import Image from "next/image";
import React from "react";

const PageDetails = async({params}) => {
    const {id} =await params;
    const data = await getSingleApi(id);
        const {destinationName,description,imageURL,priceUSD,category,duration,country} = data;
      

  return (
    <div>
      
     
      {/* Hero */}
      <header className="relative h-screen flex items-end overflow-hidden">

        <MagneticButton data={data}></MagneticButton>
        
        
        <div className="absolute inset-0 z-0">
          <Image
          width={1000}
          height={800}
            src={imageURL}
            alt="Hero"
            className="w-full h-full object-cover"
          />

         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 pb-20 flex  justify-between  items-center">
          
         <h2 className="text-4xl md:text-7xl font-bold text-primary border-l-8 border-primary-container pl-6 text-[#65A30D]">
            {destinationName}
          </h2>

            
           

            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              {duration}
            </h3>
          
        </div>
      </header>

      {/* Odyssey */}
      
<section className="py-24 px-4 md:px-10">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="space-y-6 mb-14">
      
      <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm tracking-[4px] uppercase font-semibold">
        Premium Destination
      </span>

      <h2 className="text-4xl md:text-6xl font-black leading-tight text-primary">
        About {destinationName}
      </h2>

      <p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>

    {/* Details Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
      <div className=" backdrop-blur-xl border border-white/40 rounded-[32px] p-4 hover:-translate-y-2 transition-all duration-300">
        <p className="text-sm uppercase tracking-[3px] text-primary opacity-70">
          Country
        </p>

        <h3 className="text-3xl font-black mt-2 text-white">
          {country}
        </h3>
      </div>

      <div className=" backdrop-blur-xl border border-white/40 rounded-[32px] p-4 hover:-translate-y-2 transition-all duration-300">
        <p className="text-sm uppercase tracking-[3px] text-primary opacity-70">
          Category
        </p>

        <h3 className="text-3xl font-black mt-2 text-white">
          {category}
        </h3>
      </div>

      <div className=" backdrop-blur-xl border border-white/40 rounded-[32px] p-4 hover:-translate-y-2 transition-all duration-300">
        <p className="text-sm uppercase tracking-[3px] text-primary opacity-70">
          Duration
        </p>

        <h3 className="text-3xl font-black mt-2 text-white">
          {duration}
        </h3>
      </div>

      <div className="bg-gradient-to-br from-primary to-primary/60 rounded-[32px] p-4 hover:scale-[1.02] transition-all duration-300">
        <p className="text-sm uppercase tracking-[3px] text-white/70">
          Starting Price
        </p>

        <h3 className="text-4xl font-black mt-2 text-white">
          ${priceUSD}
        </h3>

        <p className="text-white/70 mt-2">
          per person
        </p>
      </div>
    </div>

    {/* Bottom Highlight */}
    <div className="mt-14 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-[40px] p-10">
      
      <h3 className="text-3xl md:text-4xl font-black text-white">
        Why You'll Love {destinationName}
      </h3>

      <p className="text-on-surface-variant mt-5 leading-relaxed max-w-4xl text-lg">
        Explore breathtaking landscapes, rich cultural experiences, premium
        comfort, and unforgettable adventures in{" "}
        <span className="text-primary font-bold">
          {country}
        </span>.
        This destination is carefully designed to give travelers the perfect
        balance between luxury, excitement, and relaxation.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <span className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
          Luxury Experience
        </span>

        <span className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
          Guided Tour
        </span>

        <span className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
          Premium Stay
        </span>

        <span className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
          Best Memories
        </span>
      </div>
    </div>
  </div>
</section>

      {/* Gallery */}
      <section className="bg-inverse-surface py-24">
        
        <div className="px-6 md:px-10 mb-16">
          <h2 className="text-4xl font-bold text-primary-fixed-dim border-b-2 border-primary-fixed-dim inline-block pb-4">
            VISUAL ECHOES
          </h2>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-6 px-6 items-center">
          
          <div className="col-span-4 md:col-span-6 h-[600px] overflow-hidden rounded-xl">
            <img
              src={imageURL}
              alt="Gallery"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
            />
          </div>

          <div className="col-span-4 md:col-span-3 h-[400px] overflow-hidden rounded-xl mt-[100px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs3pJKynIGJ3c7HCGrsArlKA4Ll9nUyP35aQar7SgKkTF9PtGjp7oR2TuLY_G9_bSiDfBp8ih8V9TAcVILCNtIh2-0nJmSXngnMv144H3G3Ns2Ow_gWw26T53cl8HFLSRPBY5QTrXH6ozdmZpp55eYwJbInNKkzrMQmHddNg3uOESvG1tlQ71UFELOPGwyI-gkXZqZr4uSZhEq_puwaicvmqnxroFTLk-ujYXONHRxFbKuLCi5WtYkIgIM9MAmexyqIo9KzfiRgw"
              alt="Gallery"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="col-span-4 md:col-span-3 h-[500px] overflow-hidden rounded-xl -mt-[50px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtWr_bkpl8TNT2HNx77ynifWJFNNjxO5uSWzk5euYSWFohZn2g7pXuQGd5D6P-22SDiF9xeQ3ra846LmL4xVMYanlYAuNYX8XFER3RTUqZh41ouct6ke4-nh6RT7Ii_03jzI7x2mydQZ4sQlsgaCsVm-vnM6YWhdc36-fUL3qyiwoa9t4C1lXZSTZZGgJAbTcl9lxJP0lQK3ghLOgeaopRGBr3mq2MsJddu63HUrCqyGgZk2mRZGN60ZdCv6dUInOL-kZeRZRDAQ"
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sticky Bottom */}
<BookingBtn data={data}></BookingBtn>

 
    
    </div>
  );
};

export default PageDetails;