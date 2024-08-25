"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ProductShowcase() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="bg-black bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] text-white sm:py-24">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-bold tracking-tight sm:text-6xl"
        >
          Explore Our Cutting-Edge Platform
        </motion.h2>
        <p className="mx-auto mt-5 text-xl text-white/70 sm:max-w-xl">
          Discover the power of Nova Analytics, our AI-driven analytics
          platform, through an intuitive interface designed for seamless
          navigation.
        </p>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <div className="relative">
            <Image
              priority
              quality={95}
              src="/assets/images/app-screen.png"
              alt="product screenshot"
              height={650}
              width={650}
              className="mx-auto mt-14 object-contain sm:h-auto sm:w-[800px]"
              ref={imageRef}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
