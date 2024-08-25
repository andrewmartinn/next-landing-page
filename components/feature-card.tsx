"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import {
  FeatureCardIconKey,
  FeatureCardIconMap,
  FeatureCardProps,
} from "@/lib/definitions";

import {
  ChartNoAxesCombined,
  DatabaseZap,
  LayoutDashboard,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const featureCardIconMap: FeatureCardIconMap = {
  chart: ChartNoAxesCombined,
  database: DatabaseZap,
  dashboard: LayoutDashboard,
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskTemplate = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const borderElement = useRef<HTMLDivElement>(null);

  const Icon = featureCardIconMap[feature.icon as FeatureCardIconKey];

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (borderElement.current) {
        const borderRect = borderElement.current?.getBoundingClientRect();
        offsetX.set(e.x - borderRect.x);
        offsetY.set(e.y - borderRect.y);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25 }}
      className="relative rounded-xl border border-white/30 px-6 py-8"
    >
      <motion.div
        ref={borderElement}
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{
          WebkitMaskImage: maskTemplate,
          maskImage: maskTemplate,
        }}
      />
      <Card
        key={feature.id}
        className="border-none bg-black p-6 text-center text-white sm:flex-1"
      >
        <CardHeader className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black">
          <div>{Icon ? <Icon aria-label={feature.title} /> : null}</div>
        </CardHeader>
        <CardContent>
          <h3 className="mt-6 font-bold">{feature.title}</h3>
          <p className="md:text-md mt-2 text-white/70 sm:text-sm">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
