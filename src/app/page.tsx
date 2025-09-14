"use client"

import Image from "next/image";
import * as React from "react"
import WhatsAppDrawer from "@/components/whatsappDrawer";
import WeddingCalendar from "@/components/weddingCalendar";
import ModeToggle from "@/components/darkModeBtn"
import Gallery from "@/components/gallery"
import Map from "@/components/map"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ModeToggle/>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Hero Image */}
        <h1 className="font-bold text-4xl">Gloria & Peter</h1>
        <Image src={"https://lh3.googleusercontent.com/pw/AP1GczPpg8-li-1T7ff-qsQXgyHgsQVt0wRMTbuY39OLnYQnxALPiAXgCEndI1a60_3WMv-DI4JpccdFWLrtqaqqnxAcuedGUsAQQYn7--T4vGJkzyFAFqJ8V8bIGFgvbHl0_i1ERTTQMtYPYKlWmRvIwN5N=w602-h925-s-no-gm?authuser=0https://unsplash.com/photos/a-couple-of-people-holding-hands-over-a-body-of-water-YjkNrAqEnIo.jpg"} alt={"Hero"} layout="responsive" width={200} height={400} className="rounded-lg"/>

        <h1 className="font-bold text-2xl">Dear Guests</h1>
        <p className="text-sm">We are so thrilled to share this special day with you. Your presence here means the world to us as we begin our journey together. We hope you enjoy the celebration and create wonderful memories with us.Thank you for celebrating with us!</p>
        {/* <p>Wedding Message</p> */}
        <WhatsAppDrawer/>
        
        <div className="flex gap-4 items-center flex-col">
          {/* Calendar */}
          <p>Calendar</p>
          <WeddingCalendar/>
          
          
        </div>

        <Gallery/>
                        

        <h1 className="font-bold text-2xl">Map Location</h1>
        <Map/>

        <p>Program Trail for the day</p>

        <p>Dress Code</p>

        <p>For gifts</p>

        <h1>Minigallery</h1>

        <p>RSVP form and contact information</p>

        <p>Thank you note</p>

      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Wedding Website
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="pinterest.com/geeshauart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Geeshau Art
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="gloriaandpeter.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          gloriaandpeter.netflify.app
        </a>
      </footer>
    </div>
  );
}
