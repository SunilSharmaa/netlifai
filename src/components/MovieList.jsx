import MovieCard from "./MovieCard";

const MovieList = ({ section, list }) => {
  if (!section || !list) return;

  return (
    <div className="w-[95%] mx-auto mt-2 sm:mt-4">
        <h2 className=" font-semibold text-white mb-1 sm:text-xl">
          {section}
        </h2>
      <div className="mt- x-auto flex overflow-x-auto scrollbar-hide flex-col">
        <div className="flex">
          <div className="flex space-x-1.5 sm:space-x-3">
            {list.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
