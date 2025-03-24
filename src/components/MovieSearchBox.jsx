import { useRef } from "react";

const MovieSearchBox = () => {
  const inputText = useRef();

  const searchMovie = ()=> {
    console.log(inputText.current.value);
  }

  return (
    <div className="text-white absolute top-[20%] left-[50%] -translate-x-[50%] w-[50%]">
      <form
        className="space-x-6 flex justify-between py-2 px-6 rounded bg-black/60"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputText}
          type="text"
          placeholder="search for movies"
          className="px-4 py-2 rounded w-full focus:outline-none"
        />
        <button className="bg-red-700 py-1 px-6 rounded cursor-pointer" onClick={searchMovie}>search</button>
      </form>
    </div>
  );
};

export default MovieSearchBox;
