"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CallToAction() {
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ctaRef}
      className="overflow-clip bg-black py-[72px] text-white sm:py-24"
    >
      <div className="container relative mx-auto max-w-xl text-center">
        <motion.div style={{ translateY: translateY }}>
          <Image
            src="/assets/images/helix.png"
            alt="cta image gear"
            width={200}
            height={200}
            className="absolute top-20 hidden sm:left-[570px] sm:inline lg:left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY: translateY }}>
          <Image
            src="/assets/images/emojistar.png"
            alt="cta image piechart"
            width={200}
            height={200}
            className="absolute -top-[50px] hidden sm:right-[570px] sm:inline lg:right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Get instant access
        </h2>
        <p className="mx-auto mt-5 text-xl text-white/70 sm:max-w-xl">
          Experience unparalleled insights and make data-driven decisions with
          confidence. Join countless businesses already transforming their
          strategies with Nova Analytics.
        </p>
        <form className="mx-auto mt-10 flex max-w-sm flex-col gap-2.5 sm:flex-row">
          <Input
            type="email"
            placeholder="Email address"
            className="h-12 rounded-lg border-none bg-white/20 px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <Button className="h-12 rounded-lg bg-white text-black sm:px-5">
            Get access
          </Button>
        </form>
      </div>
    </section>
  );
}
