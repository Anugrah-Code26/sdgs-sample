"use client";
import { useParams } from "next/navigation";
import { goals } from "@/data/goals";

export default function SubPage() {
  const params = useParams();
  const goal = goals.find((g) => g.id === Number(params.id));
  const sub = goal?.subPages.find((s) => s.id === Number(params.subId));

  if (!goal || !sub) return <div className="p-6">Sub page not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2" style={{ color: goal.color }}>
        {goal.title} - {sub.title}
      </h1>
      <p className="text-gray-700">
        This is the <strong>{sub.title}</strong> section of{" "}
        <strong>{goal.title}</strong>. (Content placeholder)
      </p>
    </div>
  );
}
