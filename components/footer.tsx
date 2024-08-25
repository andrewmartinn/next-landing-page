import InstagramIcon from "@/public/assets/icons/insta.svg";
import XSocialIcon from "@/public/assets/icons/x-social.svg";
import TikTokIcon from "@/public/assets/icons/tiktok.svg";
import YoutubeIcon from "@/public/assets/icons/youtube.svg";
import { FooterLogoDataType } from "@/lib/definitions";

const footerLogosData: FooterLogoDataType[] = [
  { id: 1, icon: InstagramIcon },
  { id: 2, icon: XSocialIcon },
  { id: 3, icon: TikTokIcon },
  { id: 4, icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black py-5 text-white/60">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            &copy; 2024 Nova Analytics, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            {footerLogosData.map((item) => {
              const Icon = item.icon;
              return <li key={item.id}>{Icon ? <Icon /> : null}</li>;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
