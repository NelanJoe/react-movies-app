import Navigation from "../components/Navigation";
import { Outlet, Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

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
        <p>Made with 💖 and ☕ with Nelan &copy;{new Date().getFullYear()}</p>
        <div className="flex flex-row justify-center space-x-4 my-4 text-2xl ">
          <Link
            to="https://github.com/NelanJoe"
            target="_blank"
            className="text-gray-500 hover:text-black"
          >
            <BsGithub />
          </Link>
          <Link
            to="https://www.instagram.com/nelan_17"
            target="_blank"
            className="text-gray-500 hover:text-purple-500"
          >
            <BsInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/in/nelan17"
            target="_blank"
            className="text-gray-500 hover:text-blue-500"
          >
            <BsLinkedin />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Root;
