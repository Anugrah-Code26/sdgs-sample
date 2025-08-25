"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { FaRegWindowRestore, FaMousePointer, FaHandPointer } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          🎯 Sustainable Goals Explorer
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the 17 UN Sustainable Development Goals using different
          interaction modes. Choose your preferred style below to begin.
        </p>
      </div>

      {/* Button Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Pop Up */}
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <FaRegWindowRestore className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Pop Up</h2>
          <p className="text-sm text-gray-500 mb-6">
            Click a goal card to view details in a pop-up modal.
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => router.push("/popup")}
          >
            Try Pop Up
          </Button>
        </div>

        {/* Hover */}
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <FaMousePointer className="text-4xl text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Hover</h2>
          <p className="text-sm text-gray-500 mb-6">
            Hover over a goal card to expand and reveal more information.
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => router.push("/hover")}
          >
            Try Hover
          </Button>
        </div>

        {/* Click */}
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <FaHandPointer className="text-4xl text-red-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Click</h2>
          <p className="text-sm text-gray-500 mb-6">
            Click a goal card to expand and explore additional options.
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => router.push("/click")}
          >
            Try Click
          </Button>
        </div>
      </div>
    </div>
  );
}
