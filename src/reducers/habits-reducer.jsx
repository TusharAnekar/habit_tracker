import { habits } from "../db/habits";

const initialHabits = {
  originalHabits: habits,
  isShowAddHabitModal: false,
  isShowHabitDetails: false,
  showHabit: {},
  habitToEdit: {},
  archive: [],
};

const habitsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_HABITS":
      return { ...state, originalHabits: habits };
    case "TOGGLE_IS_SHOW_ADD_HABIT_MODAL":
      return { ...state, isShowAddHabitModal: !state.isShowAddHabitModal };
    case "SET_HABIT_TO_SHOW":
      return { ...state, showHabit: payload };
    case "TOGGLE_IS_SHOW_HABIT_DETAILS":
      return { ...state, isShowHabitDetails: !state.isShowHabitDetails };
    case "ADD_HABIT":
      return { ...state, originalHabits: [...state.originalHabits, payload] };
    case "SET_HABIT_TO_EDIT":
      return { ...state, habitToEdit: payload };
    case "EDIT_HABIT":
      return {
        ...state,
        originalHabits: state.originalHabits.map((habit) =>
          habit.id === payload.id
            ? {
                ...habit,
                name: payload.name,
                repeat: payload.repeat,
                goal: payload.goal,
                time: payload.time,
                date: payload.date,
              }
            : habit,
        ),
      };
    case "ADD_HABIT_TO_ARCHIVE":
      return { ...state, archive: [...state.archive, payload] };
    case "REMOVE_HABIT":
      return {
        ...state,
        originalHabits: state.originalHabits.filter(({ id }) => id !== payload),
      };
    case "UNARCHIVE":
      return {
        ...state,
        archive: state.archive.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};

export { initialHabits, habitsReducer };
