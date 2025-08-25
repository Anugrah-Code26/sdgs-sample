"use client";

import { Goal } from "@/data/goals";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PopupModal from "./PopupModal";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  goal: Goal;
  mode: "popup" | "hover" | "click";
  expanded: boolean;
  setActiveId: (id: number | null) => void;
  isLast?: boolean;
};

export default function GoalCard({ goal, mode, expanded, setActiveId, isLast = false }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (mode === "popup") {
      setActiveId(goal.id);
    } else if (mode === "click") {
      setActiveId(expanded ? null : goal.id);
    }
  };

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => mode === "hover" && setActiveId(goal.id)}
      onMouseLeave={() => mode === "hover" && setActiveId(null)}
    >
      {/* Card */}
      <div
        onClick={handleClick}
        className="p-2 rounded-lg shadow-md cursor-pointer text-white transition-all duration-300"
        style={{ backgroundColor: goal.color, minHeight: "200px" }}
      >
        <div className="flex justify-center items-center h-full">
          {/* Animated Image */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-full flex justify-center"
          >
            <Image
              src={goal.icon}
              alt={goal.title}
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && mode !== "popup" && (
          <motion.div
            key="expanded-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full mt-2 p-4 rounded-xl shadow-2xl flex flex-col items-center text-center z-20"
            style={{ backgroundColor: goal.color }}
          >

            {!isLast && (
              <>
                {/* Title */}
                <h3 className="font-bold text-lg mb-2 text-white">{goal.title}</h3>
    
                {/* Description */}
                <p className="text-white text-sm mb-4 px-2">{goal.description}</p>
              </>
            )}  

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full px-2">
              {/* See More Button */}
              <button
                className={`w-full py-2 font-medium rounded-lg transform transition duration-200
                  ${isLast 
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed" 
                    : "bg-white text-black hover:scale-105 hover:bg-gray-200"
                  }`}
                disabled={isLast}
                onClick={(e) => {
                  if (!isLast) {
                    e.stopPropagation();
                    router.push(`/goals/${goal.id}`);
                  }
                }}
              >
                See More
              </button>

              {!isLast && (
                // Subpage Buttons
                <div className="flex flex-wrap gap-2 justify-center">
                  {goal.subPages.map((sub) => (
                    <button
                      key={sub.id}
                      className="px-3 py-1 bg-white text-black text-xs rounded-md transform transition duration-200 hover:scale-105 hover:bg-gray-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/goals/${goal.id}/${sub.id}`);
                      }}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup modal */}
      {mode === "popup" && expanded && (
        <PopupModal goal={goal} onClose={() => setActiveId(null)} />
      )}
    </div>
  );
}
