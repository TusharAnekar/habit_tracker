import { HabitCard } from "../components/HabitCard";
import { useHabitContext } from "../contexts/habit-context";

const Home = () => {
  const {
    habits: { originalHabits },
    setHabits,
  } = useHabitContext();

  const handleNewHabit = () => {
    setHabits({ type: "TOGGLE_IS_SHOW_ADD_HABIT_MODAL" });
  };

  return (
    <div className="p-4">
      <button
        className="mb-8 w-full rounded-lg bg-red-600 py-2 text-white md:max-w-sm"
        onClick={handleNewHabit}
      >
        Add new habit
      </button>

      <ul className="grid-col-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {originalHabits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  );
};

export { Home };
