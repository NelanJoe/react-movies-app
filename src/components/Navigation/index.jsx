import Search from "../Search";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-4 px-10 flex flex-col md:flex-row justify-between items-center">
      <Link to="/" className="text-4xl font-bold text-red-500">
        Movielist
      </Link>
      <Search />
      <div className="flex flex-row justify-center items-center space-x-3">
        <Link
          to="/login"
          className="text-red-500 px-6 py-2 bg-transparent border-2 border-red-500 hover:text-white hover:bg-red-600 after:bg-red-700 shadow-md rounded-full"
        >
          SignUp
        </Link>
        <Link
          to="/login"
          className="text-white px-6 py-2 bg-red-500 hover:bg-red-600 after:bg-red-700 shadow-md rounded-full"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
