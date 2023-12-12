import { useEffect, useRef } from "react";
import { useHabitContext } from "../contexts/habit-context";

import CloseIcon from "@mui/icons-material/Close";

const HabitDetailsModal = () => {
  const dialog = useRef();
  const {
    habits: {
      showHabit: { name, repeat, goal, time, date },
    },
    setHabits,
  } = useHabitContext();

  useEffect(() => {
    dialog.current.showModal();
  }, [dialog]);

  const handleClose = () => {
    setHabits({ type: "TOGGLE_IS_SHOW_HABIT_DETAILS" });
    dialog.current.close();
  };

  return (
    <dialog
      ref={dialog}
      className="w-2/3 rounded-lg p-6 md:max-w-md lg:max-w-lg"
    >
      <div className="mb-4 flex justify-between">
        <h2 className="text-xl font-bold">Habit Details</h2>
        <CloseIcon
          className="cursor-pointer rounded-full border border-red-600 text-red-600"
          onClick={handleClose}
        />
      </div>
      <div className="mb-2">
        <p className="font-semibold">Name</p>
        <p>{name}</p>
      </div>

      <div className="mb-2 flex justify-between ">
        <div className="w-1/2">
          <p className="font-semibold">Repeat</p>
          <p>{repeat}</p>
        </div>
        <div className="w-1/2">
          <p className="font-semibold">Goal</p>
          <p>{goal}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-1/2">
          <p className="font-semibold">Time</p>
          <p>{time}</p>
        </div>
        <div className="w-1/2">
          <p className="font-semibold">Date</p>
          <p>{date}</p>
        </div>
      </div>
    </dialog>
  );
};

export { HabitDetailsModal };
