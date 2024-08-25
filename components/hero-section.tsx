"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-clip bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] text-white sm:py-[100px]">
      <div className="absolute left-[50%] top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]" />
      <div className="container relative mx-auto">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1 text-sm"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99)] bg-clip-text text-transparent">
              Version 2.0
            </span>
            <span className="flex items-center gap-1">
              <span>Read More</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex">
            <h1 className="text-center text-5xl font-bold tracking-tight md:text-7xl lg:text-9xl">
              Transforming Data
              <br />
              into Action
            </h1>
            <motion.div
              initial={{ top: "100px", right: "900px" }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="lg:top-50 absolute hidden sm:inline md:right-[476px] md:top-[100px] lg:right-[900px]"
            >
              <Image
                priority
                quality={95}
                src="/assets/images/cursor.png"
                alt="hero cursor image"
                height={200}
                width={200}
                className="max-w-none"
              />
            </motion.div>
            <motion.div
              initial={{ top: "50px", left: "1000px" }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="lg:top-1- absolute hidden sm:inline md:left-[500px] md:top-[150px] lg:left-[1000px]"
            >
              <Image
                priority
                quality={95}
                src="/assets/images/message.png"
                alt="hero message image"
                height={200}
                width={200}
                className="max-w-none"
              />
            </motion.div>
          </div>
        </div>
        <p className="mx-auto mt-8 text-center text-lg leading-9 sm:max-w-[40rem]">
          A powerful AI-driven analytics platform that helps businesses make
          data-driven decisions by providing real-time insights, predictive
          analytics, and automated reports.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button className="bg-white px-5 text-zinc-900 hover:bg-white/80">
            Try Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
