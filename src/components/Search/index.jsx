import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "/search",
      search: `?title=${title}`,
    });

    setTitle("");
  };

  return (
    <div className="relative w-full mb-3 md:mb-0 md:w-1/2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="outline-none bg-transparent border rounded-full border-red-500 px-4 py-2 w-[100%] text-white"
          placeholder="Search here...."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="absolute top-0 right-0 transform translate-y-3 -translate-x-5 text-white">
          <FiSearch />
        </div>
      </form>
    </div>
  );
};

export default Search;
