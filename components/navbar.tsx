import { NavLinkType } from "@/lib/definitions";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks: NavLinkType[] = [
  { id: 1, url: "/", name: "About" },
  { id: 2, url: "/", name: "Features" },
  { id: 3, url: "/", name: "Updates" },
  { id: 4, url: "/", name: "Help" },
  { id: 5, url: "/", name: "Customers" },
];

export default function Navbar() {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <div className="rounded-lg bg-indigo-950 p-1 shadow-sm">
            <Image
              priority
              quality={95}
              src="/assets/icons/logo.svg"
              height={30}
              width={30}
              alt="logo"
              className="h-[30px] w-[30px]"
            />
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="cursor-pointer rounded-lg border border-white border-opacity-30 p-1 sm:hidden"
          >
            <Menu className="h-8 w-8 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-10 w-12">
            {navLinks.map((item) => (
              <Link key={item.id} href={item.url}>
                <DropdownMenuItem className="cursor-pointer">
                  <span>{item.name}</span>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <nav className="hidden items-center gap-x-6 sm:flex">
          {navLinks.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className="text-sm text-white text-opacity-60 transition-all hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="h-15 bg-white text-black hover:bg-gray-300"
          >
            <Link href="/login">Get Demo</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
