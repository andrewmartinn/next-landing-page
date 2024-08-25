"use client";

import { motion } from "framer-motion";
import { FAQsDataType } from "@/lib/definitions";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqsData: FAQsDataType[] = [
  {
    id: 1,
    question: "What is Nova Analytics platform?",
    answer:
      "Our platform leverages cutting-edge AI technology to provide businesses with real-time insights, predictive analytics, and automated reports. It helps you make data-driven decisions with confidence and optimize your strategies for maximum impact.",
  },
  {
    id: 2,
    question: "How does it integrate with existing data sources?",
    answer:
      "Our platform seamlessly integrates with various data sources, including CRMs, ERPs, and third-party APIs. This allows you to centralize all your data in one place, making it easier to analyze and draw meaningful insights.",
  },
  {
    id: 3,
    question: "Can I customize the dashboards?",
    answer:
      "Absolutely! Our platform offers fully customizable dashboards that you can tailor to meet your specific business needs. You can choose which metrics to display, how they’re visualized, and arrange them to suit your workflow.",
  },
  {
    id: 4,
    question: "Is my data secure on this platform?",
    answer:
      " Yes, security is our top priority. We implement industry-standard encryption and data protection measures to ensure that your data remains safe and secure. Regular security audits and updates are conducted to maintain the highest security standards.",
  },
  {
    id: 5,
    question: "Is Nova Analytics suitable for small businesses?",
    answer:
      "Absolutely! Nova Analytics is designed to be flexible and scalable, so whether you're a small business or a large enterprise, you can tailor the platform to meet your specific needs.",
  },
];

export default function FAQsSection() {
  return (
    <section className="bg-gradient-to-b from-[#5D2CAB] to-black py-[72px] text-white sm:py-24">
      <div className="container mx-auto">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold tracking-tight"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqsData.map((item) => (
              <AccordionItem
                value={`item-${item.id}`}
                key={item.id}
                className="border-white/30"
              >
                <AccordionTrigger className="sm:text-md text-left text-sm hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
