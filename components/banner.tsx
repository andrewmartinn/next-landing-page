import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner_gradient">
      <div className="container mx-auto py-3 text-center font-medium">
        <Link href="#" className="flex items-center justify-center gap-x-2">
          <p className="hover:underline">Explore demo</p>
          <SquareArrowOutUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
