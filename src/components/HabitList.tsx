import type { Habit } from "../types/Habit";
import HabitCard from "./HabitCard";

interface HabitListProps {
  habits: Habit[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function HabitList({ habits, onToggle, onDelete }: HabitListProps) {
  if (habits.length === 0) {
    return <p className="text-center text-gray-400 mt-4">Aún no tienes hábitos registrados.</p>;
  }

  return (
    <div className="space-y-3">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
