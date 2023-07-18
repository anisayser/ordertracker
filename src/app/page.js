"use client"
import Image from "next/image";
import orderTrackerImg from "../assets/images/orderTrackerImg3.png";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleLoad = () => {
      Ordertracker({
        id: "64b55f6f78eb3f2cb06dac08",
        // Uncomment the next line & replace YOUR_TRACKING_NUMBER by a valid tracking number
        // trackingNumber: "YOUR_TRACKING_NUMBER"
      }).render("#ordertracker-widget");
    };

    const script = document.createElement("script");
    script.src = "https://www.ordertracker.com/sdk.js";
    script.onload = handleLoad;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);



  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <div className="w-full h-full lg:h-screen">
          {/* <img src={bg1} className='w-full h-full' alt="" /> */}

          {/* <Navigation /> */}
          <div className="container px-5 lg:px-0  mx-auto pt-10">
            <div className="grid grid-cols-2 gap-4 lg:gap-24 lg:h-[90vh]">
              <div className="col-span-2 lg:col-span-1">
                <h2 className="text-6xl font-bold leading-snug text-gray-900">
                  Package tracking made easy, you just need a tracking number!
                </h2>
                <div className="pt-10" id="ordertracker-widget"></div>
                {/* <div className='mt-10 flex items-center shadow-2xl'>
                    <input type="text" className='p-8 w-full bg-white/90 rounded rounded-r-none backdrop-blur-xl text-black' value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} placeholder='Enter your tracking number' />
                    <button onClick={handleTrack} className='bg-white/90 rounded rounded-l-none py-8 px-10 hover:bg-white duration-300 ease-linear relative z-10 group'>
                        <span className="z-50">Search</span>
                        <span className='w-[2px] h-full absolute bg-[#FC6747] top-0 left-0 -z-10 group-hover:w-full duration-300 ease-linear'></span>
                    </button>
                </div> */}
                <div className="bg-black/10 mt-5 backdrop-blur-sm rounded p-5 pb text-gray-100">
                  <p className="leading-7 tracking-wider text-gray-900">
                    Track my package has never been that easy with this global
                    parcel tracking tool allowing you to track parcels from any
                    post office. A powerful universal parcel tracking system
                    that will provide you with shipment info by tracking number
                    lookup from any international courier such as China Post,
                    Speedpak, 4PX Express, Amazon Logistics TBA, EMS ePacket,
                    Dynamex, Aliexpress - Standard Shipping, Intelcom Express,
                    Hermes, Deutsche Post - DHL Global mail - DHL Ecommerce,
                    Yanwen, Canpar, Yunexpress, Pitney Bowes Inc - PBI, BNI -
                    BNICA and many more!
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <Image src={orderTrackerImg} className="xl:w-[800px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
