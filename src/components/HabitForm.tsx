import { useState } from "react";

interface HabitFormProps {
  onAddHabit: (name: string) => void;
}

export default function HabitForm({ onAddHabit }: HabitFormProps) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!habit.trim()) return;
    onAddHabit(habit);
    setHabit("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Nuevo hábito..."
        className="flex-1 p-2 border rounded-lg"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Agregar
      </button>
    </form>
  );
}
