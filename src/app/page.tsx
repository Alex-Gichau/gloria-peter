"use client"

import Image from "next/image";
import * as React from "react"
import WhatsAppDrawer from "@/components/whatsappDrawer";
import WeddingCalendar from "@/components/weddingCalendar";

import { useTheme } from "next-themes";
import {Moon, Sun} from "lucide-react"


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Hero Image */}
        <p>Hero Image</p>
        <Image src={"https://unsplash.com/photos/a-couple-of-people-holding-hands-over-a-body-of-water-YjkNrAqEnIo"} width={149} height={60} alt={"Hero"}/>

        <h1>Dear Guests</h1>
        <p>Wedding Message</p>
        <WhatsAppDrawer/>
        
        <div className="flex gap-4 items-center flex-col">
          {/* Calendar */}
          <p>Calendar</p>
          <WeddingCalendar/>
          
          
        </div>

        <h1>Our Journey</h1>
        <p>Couple Gallery</p>

        <p>Map Location</p>

        <p>Program Trail for the day</p>

        <h1>Minigallery</h1>

        <p>Dress Code</p>

        <p>For gifts</p>

        <h1>Minigallery</h1>

        <p>RSVP form and contact information</p>

        <p>Thank you note</p>

      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
