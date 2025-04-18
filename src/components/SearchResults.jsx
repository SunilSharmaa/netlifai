import { useSelector } from "react-redux";
import useSearchResults from "../hooks/useSearchResult";
import MovieList from "./MovieList";

const SearchResults = () => {
  useSearchResults();
  const { movieName, movieData } = useSelector((store) => store.gemini);
  if (!movieName && !movieData) return;
  
  return (
    <div className="bg-black/70 pt-2 mt-2">
      {movieName.map((val, index) => (
        <MovieList key={val} section={val} list={movieData[index]} />
      ))}
    </div>
  );
};

export default SearchResults;
