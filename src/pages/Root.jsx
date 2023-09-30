import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-gray-700 to-gray-800">
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex flex-col text-center my-12">
        <p className="font-semibold text-2xl">
          Made with 💖 and ☕ with Nelan &copy;{new Date().getFullYear()}
        </p>
        <div className="icons"></div>
      </footer>
    </>
  );
};

export default Root;
