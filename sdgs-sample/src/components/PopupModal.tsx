"use client";

import { Goal } from "@/data/goals";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  goal: Goal;
  onClose: () => void;
};

export default function PopupModal({ goal, onClose }: Props) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        key="popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="popup-content"
          initial={{ opacity: 0, y: 20, scale: 0.95, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
          animate={{ opacity: 1, y: 0, scale: 1, boxShadow: "0px 20px 60px rgba(0,0,0,0.2)" }}
          exit={{ opacity: 0, y: 20, scale: 0.95, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-xl p-6 w-[400px] max-w-full flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Goal Image */}
          <Image
            src={goal.icon}
            alt={goal.title}
            width={100}
            height={100}
            className="rounded-lg mb-4"
          />

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h2>

          {/* Description */}
          <p className="text-gray-700 mb-4">{goal.description}</p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full px-2">
            {/* See More Button */}
            <button
              className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg transform transition duration-200 hover:scale-105 hover:bg-blue-700"
              onClick={() => {
                onClose();
                router.push(`/goals/${goal.id}`);
              }}
            >
              See More
            </button>

            {/* Subpage Buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              {goal.subPages.map((sub) => (
                <button
                  key={sub.id}
                  className="px-3 py-1 bg-gray-800 text-white text-xs rounded-md transform transition duration-200 hover:scale-105 hover:bg-gray-700"
                  onClick={() => {
                    onClose();
                    router.push(`/goals/${goal.id}/${sub.id}`);
                  }}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
