import FeatureCard from "./feature-card";
import { FeaturesDataType } from "@/lib/definitions";

const featuresData: FeaturesDataType[] = [
  {
    id: 1,
    title: "Data Integration",
    description:
      "Seamlessly integrate data from multiple sources, including CRMs, ERPs, and third-party APIs.",
    icon: "database",
  },
  {
    id: 2,
    title: "Predictive Analytics",
    description:
      "Leverage AI to forecast trends, identify patterns, and make informed decisions with confidence.",
    icon: "chart",
  },
  {
    id: 3,
    title: "Customizable Dashboards",
    description:
      "Tailor your analytics experience with fully customizable dashboards that align with your business needs.",
    icon: "dashboard",
  },
];

export default function Features() {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-5xl font-bold tracking-tight sm:text-6xl">
          Everything you need
        </h2>
        <div className="mx-auto max-w-2xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Unlock the full potential of your data with cutting-edge AI
            technology, designed to transform insights into action and drive
            your business forward.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
