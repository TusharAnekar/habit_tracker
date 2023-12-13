import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

import { useHabitContext } from "../contexts/habit-context";

const HabitCard = ({ habit, isArchive }) => {
  const { setHabits } = useHabitContext();

  const handleToggleIsShowHabitDetails = () => {
    setHabits({ type: "SET_HABIT_TO_SHOW", payload: habit });
    setHabits({ type: "TOGGLE_IS_SHOW_HABIT_DETAILS" });
  };

  const handleEdit = () => {
    setHabits({ type: "SET_HABIT_TO_EDIT", payload: habit });
    setHabits({ type: "TOGGLE_IS_EDIT_HABIT" });
    setHabits({ type: "TOGGLE_IS_SHOW_ADD_HABIT_MODAL" });
  };

  const handleArchive = () => {
    setHabits({ type: "REMOVE_HABIT", payload: habit.id });
    setHabits({ type: "ADD_HABIT_TO_ARCHIVE", payload: habit });
  };

  const handleDelete = () => {
    setHabits({ type: "REMOVE_HABIT", payload: habit.id });
  };

  const handleUnarchive = () => {
    setHabits({ type: "ADD_HABIT", payload: habit });
    setHabits({ type: "UNARCHIVE", payload: habit.id });
  };

  return (
    <div className="relative h-40 border p-4">
      <p
        className="cursor-pointer text-xl font-semibold"
        onClick={handleToggleIsShowHabitDetails}
      >
        {habit.name}
      </p>

      <div className="absolute bottom-4 right-4 flex gap-4">
        {!isArchive && (
          <EditIcon onClick={handleEdit} className="cursor-pointer" />
        )}
        {isArchive ? (
          <UnarchiveIcon onClick={handleUnarchive} className="cursor-pointer" />
        ) : (
          <ArchiveIcon onClick={handleArchive} className="cursor-pointer" />
        )}
        {!isArchive && (
          <DeleteIcon onClick={handleDelete} className="cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export { HabitCard };
