import CardListing from "@/components/Cards";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Apple } from "lucide-react";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      {/* Nav bar */}
      <NavBar />
      <CardListing />
      {/* <h2>Welcome to my site</h2>
      <div className="bg-gray-300 rounded-full w-10 h-10 border border-red-400 flex items-center justify-center">
        <Apple fill="red" className="text-white " />
      </div>
      <FaShoppingBag fill="red" />
      <Link href="/about-us">About Us</Link> */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
