"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter, usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide navbar on Home page
  if (pathname === "/") return null;

  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 shadow-md">
      {/* Title Image */}
      <Image
        src="/sdgs/title.png"
        alt="SDGs Title"
        width={400}
        height={100}
        className="object-contain mb-4"
      />

      {/* Home Button */}
      <Button
        variant="secondary"
        className="flex items-center gap-2"
        onClick={() => router.push("/")}
      >
        <FaHome /> Home
      </Button>
    </div>
  );
}
