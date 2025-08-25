"use client";

import { goals } from "@/data/goals";
import GoalCard from "./GoalCard";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

type Props = {
  mode: "popup" | "hover" | "click";
};

export default function GoalGrid({ mode }: Props) {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {goals.map((goal, index) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          mode={mode}
          expanded={activeId === goal.id}
          setActiveId={setActiveId}
          isLast={index === goals.length - 1}
        />
      ))}
    </div>
  );
}
