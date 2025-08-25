"use client";
import { useParams, useRouter } from "next/navigation";
import { goals } from "@/data/goals";
import Button from "@/components/ui/Button";

export default function GoalDetailPage() {
  const params = useParams();
  const router = useRouter();
  const goal = goals.find((g) => g.id === Number(params.id));

  if (!goal) return <div className="p-6">Goal not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4" style={{ color: goal.color }}>
        {goal.title}
      </h1>
      <p className="mb-6">{goal.description}</p>

      <h2 className="text-xl font-semibold mb-3">Sub Pages</h2>
      <div className="flex flex-wrap gap-3">
        {goal.subPages.map((sub) => (
          <Button
            key={sub.id}
            onClick={() => router.push(`/goals/${goal.id}/${sub.id}`)}
          >
            {sub.title}
          </Button>
        ))}
      </div>
    </div>
  );
}
