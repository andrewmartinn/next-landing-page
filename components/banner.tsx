import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="border-b border-gray-800 bg-zinc-950 text-white">
      <div className="container mx-auto py-3 text-center font-medium">
        <Link href="#" className="flex items-center justify-center gap-x-2">
          <p className="text-sm hover:underline">Explore demo</p>
          <SquareArrowOutUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
