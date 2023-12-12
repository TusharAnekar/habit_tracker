import { HabitCard } from "../components/HabitCard";
import { useHabitContext } from "../contexts/habit-context";

const Archive = () => {
  const {
    habits: { archive },
  } = useHabitContext();

  return (
    <div className="p-4">
      <h2 className="mb-6 text-xl font-semibold">Arhived Habits</h2>
      <ul className="grid-col-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {archive.map((habit) => (
          <HabitCard habit={habit} isArchive />
        ))}
      </ul>
    </div>
  );
};

export { Archive };
