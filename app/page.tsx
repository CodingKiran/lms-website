// import Link from "next/link";
import Faqs from "@/components/Faqs/page";
import Profile from "@/components/Profile/page";
import dynamic from "next/dynamic";

export default function Home() {
  const Navbar = dynamic(() => import("../components/Navbar/page"), {
    ssr: false,
  });

  const Hero = dynamic(() => import("../components/Hero/page"), {
    ssr: false,
  });

  const Footer = dynamic(() => import("../components/Footer/page"), {
    ssr: false,
  });

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Profile />
        <Faqs />
      </div>

      <Footer />
    </div>
  );
}
