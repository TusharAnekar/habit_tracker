import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex  justify-between bg-red-600 p-4 text-white">
      <h1 className="">Habit Tracker</h1>

      <nav className="flex gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/archive"}>Archive</NavLink>
      </nav>
    </header>
  );
};

export { Header };
