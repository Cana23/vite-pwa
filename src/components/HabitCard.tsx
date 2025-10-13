import type { Habit } from "../types/Habit";

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function HabitCard({ habit, onToggle, onDelete }: HabitCardProps) {
  return (
    <div
      className="flex justify-between items-center p-4 bg-white shadow-md rounded-2xl border border-gray-200 transition hover:scale-[1.01]"
    >
      <div className="flex flex-col cursor-pointer" onClick={() => onToggle(habit.id)}>
        <span
          className={`text-lg font-medium ${
            habit.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {habit.name}
        </span>
        <span className="text-xs text-gray-400">
          {new Date(habit.date).toLocaleDateString("es-MX")}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
          className="w-5 h-5 accent-blue-500"
        />
        <button
          onClick={() => onDelete(habit.id)}
          className="text-red-500 hover:text-red-700 text-lg font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
