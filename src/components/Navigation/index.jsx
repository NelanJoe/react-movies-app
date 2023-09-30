import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="py-4 px-10 flex justify-between items-center">
      <Link to="/" className="text-4xl font-bold text-red-500">
        Movielist
      </Link>
      <div className="relative w-1/2">
        <input
          type="text"
          className="outline-none bg-transparent border rounded-full border-red-500 px-4 py-2 w-[100%] text-white"
          placeholder="Search here...."
        />
        <div className="absolute top-0 right-0 transform translate-y-3 -translate-x-5 text-white">
          <FiSearch />
        </div>
      </div>
      <div>
        <Link to="/popular-movies" className="font-semibold text-white">
          Popular Movies
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
