import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Archive } from "./pages/Archive";
import { useHabitContext } from "./contexts/habit-context";
import { HabitModal } from "./components/HabitModal";
import { HabitDetailsModal } from "./components/HabitDetailsModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    habits: { isShowAddHabitModal, isShowHabitDetails },
  } = useHabitContext();

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
      </Routes>

      {isShowAddHabitModal && <HabitModal />}
      {isShowHabitDetails && <HabitDetailsModal />}
    </div>
  );
}

export default App;
