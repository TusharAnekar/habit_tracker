import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { habitsReducer, initialHabits } from "../reducers/habits-reducer";

const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useReducer(habitsReducer, initialHabits);

  const getHabits = () => {
    setHabits({ type: "SET_HABITS" });
  };

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <HabitContext.Provider value={{ habits, setHabits }}>
      {children}
    </HabitContext.Provider>
  );
};

const useHabitContext = () => useContext(HabitContext);

export { HabitProvider, useHabitContext };
