"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { LogoDataType } from "@/lib/definitions";

import acmeLogo from "@/public/assets/images/acme.png";
import quantamLogo from "@/public/assets/images/quantum.png";
import echoLogo from "@/public/assets/images/echo.png";
import celestialLogo from "@/public/assets/images/celestial.png";
import pulseLogo from "@/public/assets/images/pulse.png";
import apexLogo from "@/public/assets/images/apex.png";

const logosData: LogoDataType[] = [
  { id: 1, src: acmeLogo, alt: "Acme Logo" },
  { id: 2, src: quantamLogo, alt: "Quantam Logo" },
  { id: 3, src: echoLogo, alt: "Echo Logo" },
  { id: 4, src: celestialLogo, alt: "Celestial Logo" },
  { id: 5, src: pulseLogo, alt: "Pulse Logo" },
  { id: 6, src: apexLogo, alt: "Apex Logo" },
];

export default function LogoTicker() {
  return (
    <section className="bg-black py-[72px] text-white sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-xl text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="relative mt-9 flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:content-['']">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-16 pr-16"
          >
            {logosData.map((item) => (
              <Image
                key={item.id}
                src={item.src}
                alt={item.alt}
                className="h-8 w-auto flex-none"
              />
            ))}
            {logosData.map((item) => (
              <Image
                key={item.id}
                src={item.src}
                alt={item.alt}
                className="h-8 w-auto flex-none"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
