"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname !== "/") return null;

  return (
    <footer className="w-full bg-black text-white text-center py-3">
      Developed by <span className="font-semibold">Anugrah Yazid Ghani</span>
    </footer>
  );
}
