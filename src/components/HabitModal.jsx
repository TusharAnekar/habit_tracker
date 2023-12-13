import { useEffect, useRef, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useHabitContext } from "../contexts/habit-context";
import { toast } from "react-toastify";

const HabitModal = () => {
  const habitForm = useRef();
  const {
    habits: {
      habitToEdit: { id, name, repeat, goal, time, date },
      originalHabits,
    },
    setHabits,
  } = useHabitContext();

  const [habitDetails, setHabitDetials] = useState({
    id: id ? id : originalHabits.length + 1,
    name: id ? name : "",
    repeat: id ? repeat : "",
    goal: id ? goal : "",
    time: id ? time : "",
    date: id ? date : "",
  });

  useEffect(() => {
    habitForm.current.showModal();
  }, [habitForm]);

  const handleClose = () => {
    setHabits({ type: "TOGGLE_IS_SHOW_ADD_HABIT_MODAL" });
    setHabits({ type: "SET_HABIT_TO_EDIT", payload: {} });

    habitForm.current.close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      setHabits({ type: "EDIT_HABIT", payload: habitDetails });
      setHabits({ type: "SET_HABIT_TO_EDIT", payload: {} });
      toast.success("Habit edited successfully.");
    } else {
      setHabitDetials({ ...habitDetails, id: originalHabits.length + 1 });
      setHabits({ type: "ADD_HABIT", payload: habitDetails });
      toast.success("Habit added successfully.");
    }

    setHabits({ type: "TOGGLE_IS_SHOW_ADD_HABIT_MODAL" });
    habitForm.current.close();
  };

  const handleInput = (e) => {
    setHabitDetials({ ...habitDetails, [e.target.name]: e.target.value });
  };

  return (
    <dialog
      ref={habitForm}
      className="w-2/3 rounded-lg p-6 md:max-w-md lg:max-w-lg"
    >
      <div className="mb-4 flex justify-between">
        <h2 className="text-xl font-bold">Habit Details</h2>
        <CloseIcon
          className="cursor-pointer rounded-full border border-red-600 text-red-600"
          onClick={handleClose}
        />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="habit-id" className="block font-semibold">
            Id:
          </label>
          <input
            type="number"
            name="id"
            id="habit-id"
            className="w-full rounded-lg border border-black p-2"
            readOnly
            value={id ? id : originalHabits.length + 1}
          />
        </div>
        <div>
          <label htmlFor="habit-name" className="block font-semibold">
            Name:
          </label>
          <input
            required
            type="text"
            name="name"
            id="habit-name"
            defaultValue={id ? name : ""}
            className="w-full rounded-lg border border-black p-2"
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="habit-repeat" className="block font-semibold">
            Repeat:
          </label>
          <select
            name="repeat"
            id="habit-repeat"
            defaultValue={id ? repeat : ""}
            required
            className="w-full rounded-lg border border-black p-2"
            onChange={handleInput}
          >
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        <div>
          <label htmlFor="goal-repeat" className="block font-semibold">
            Goal:
          </label>
          <select
            name="goal"
            id="goal-repeat required"
            defaultValue={id ? goal : ""}
            required
            className="w-full rounded-lg border border-black p-2"
            onChange={handleInput}
          >
            <option value="">Select</option>
            <option value="1 times Daily">1 times Daily</option>
            <option value="2 times Daily">2 times Daily</option>
            <option value="1 times Weekly">1 times Weekly</option>
            <option value="2 times Weekly">2 times Weekly</option>
            <option value="1 times Monthly">1 times Monthly</option>
            <option value="2 times Monthly">2 times Monthly</option>
            <option value="1 times Yearly">1 times Yearly</option>
            <option value="2 times Yearly">2 times Yearly</option>
          </select>
        </div>

        <div>
          <label htmlFor="habit-time" className="block font-semibold">
            Time
          </label>
          <input
            type="time"
            name="time"
            id="habit-time"
            defaultValue={id ? time : ""}
            required
            className="w-full rounded-lg border border-black p-2"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="habit-date" className="block font-semibold">
            Date:
          </label>
          <input
            type="date"
            name="date"
            id="habit-date"
            defaultValue={id ? date : ""}
            className="w-full rounded-lg border border-black p-2"
            required
            onChange={handleInput}
          />
        </div>

        {id ? (
          <button className="mt-4 w-full rounded-lg bg-red-500 py-2 text-white">
            Edit
          </button>
        ) : (
          <button className="mt-4 w-full rounded-lg bg-blue-500 py-2">
            Submit
          </button>
        )}
      </form>
    </dialog>
  );
};

export { HabitModal };
