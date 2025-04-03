import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addInputText } from "../redux/geminiSlice";
import SearchResults from "./SearchResults";

const MovieSearchBox = () => {
  const dispatch = useDispatch();
  const inputText = useRef();

  const searchMovie = () => {
    dispatch(addInputText(inputText.current.value));
  };

  return (
    <div className="text-white absolute top-[20%] left-[50%] -translate-x-[50%] w-full">
      <div className="w-[95%] sm:w-[50%] mx-auto">
        <form
          className="space-x-6 flex justify-between py-1 sm:py-2 px-2  sm:px-6 rounded bg-black/60"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={inputText}
            type="text"
            placeholder="search for movies"
            className="px-4 py-2 rounded w-full focus:outline-none"
          />
          <button
            className="bg-red-700 py-1 px-4 sm:px-6 rounded cursor-pointer"
            onClick={searchMovie}
          >
            search
          </button>
        </form>
      </div>
      <SearchResults />
    </div>
  );
};

export default MovieSearchBox;
