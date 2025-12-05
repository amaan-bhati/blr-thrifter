"use client";

import { useState } from "react";
import Image from "next/image";
import { shoppingData } from "./data";

export default function Home() {
  const [activeTab, setActiveTab] = useState(shoppingData[0].id);

  // Find the currently active location data
  const currentData = shoppingData.find((loc) => loc.id === activeTab) || shoppingData[0];

  return (
    <div className="min-h-screen bg-canvas text-primary pb-12 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-subtle border-b border-border py-4 px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-2xl font-semibold mb-2 flex items-center justify-center gap-3 whitespace-nowrap">
          <div className="relative h-8 w-8 md:h-10 md:w-10 rounded-full overflow-hidden shrink-0">
            <img
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1764588498/Screenshot_2025-11-26_at_6.58.01_PM_m1stjx.png"
              alt="Logo"
              // fill
              className="object-cover"
            />
          </div>
          Bangalore Clothing Guide
        </h1>
        <div className="text-secondary text-xs md:text-sm max-w-[600px]">
          Curated list of 70+ Thrift Stores, Surplus Warehouses & Factory Outlets
        </div>
      </header>

      {/* TABS */}
      <div className="sticky top-[85px] md:top-[100px] z-40 bg-canvas border-b border-border">
        <div className="max-w-6xl mx-auto px-4 mt-5">
          <div className="flex overflow-x-auto no-scrollbar gap-0 md:justify-center">
            {shoppingData.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                className={`
                  px-5 py-3 text-sm whitespace-nowrap border-b-2 transition-all duration-200
                  ${
                    activeTab === loc.id
                      ? "font-semibold text-primary border-accent-orange opacity-100"
                      : "text-primary border-transparent opacity-70 hover:opacity-100 hover:border-secondary"
                  }
                `}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 mt-4">
        
        {/* Animated container for tab switch */}
        <div key={activeTab} className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* MAP CONTAINER (Full Width) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-2 rounded-md overflow-hidden border border-border bg-subtle h-[250px] md:h-[350px] relative">
            <iframe
              src={currentData.mapEmbedUrl}
              className="w-full h-full border-0 block"
              loading="lazy"
              title={`${currentData.label} Map`}
              // THE DARK MODE HACK
              style={{
                filter: "invert(90%) hue-rotate(180deg) contrast(90%) saturate(85%)"
              }}
            />
          </div>

          {/* SHOP CARDS */}
          {currentData.shops.map((shop, index) => (
            <div 
              key={index}
              className="bg-canvas border border-border rounded-md p-4 flex flex-col justify-between hover:-translate-y-0.5 hover:border-secondary transition-all duration-200"
            >
              <div>
                <div className="flex justify-between items-start mb-2 gap-2">
                  <span className="text-base font-semibold text-accent-blue">
                    {shop.name}
                  </span>
                  <span className="border border-border rounded-full px-2 py-0.5 text-[11px] font-medium text-secondary whitespace-nowrap">
                    {shop.tag}
                  </span>
                </div>
                <p className="text-[13px] text-secondary mb-4 leading-relaxed">
                  {shop.desc}
                </p>
              </div>
              
              <a 
                href={shop.mapLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-btn-bg text-accent-green text-[13px] font-semibold py-2 rounded-md border border-border hover:bg-accent-green hover:text-white hover:border-accent-green transition-colors duration-200"
              >
                View on Map
              </a>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}