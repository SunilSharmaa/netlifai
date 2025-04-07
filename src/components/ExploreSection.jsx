import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const ExploreSection = () => {
  let movieCollection = useSelector((store)=> store.movies)
  let {nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies} = movieCollection;

  return (
    <div className=" relative">
      <div className="-mt-10 lg:-mt-48">
      <MovieList section={"Now Playing"} list={nowPlayingMovies}/>
      <MovieList section={"Popular"} list={popularMovies}/>
      <MovieList section={"Top Rated"} list={topRatedMovies}/>
      <MovieList section={"Up-Coming"} list={upComingMovies}/>
      </div>
    </div>
  )
}

export default ExploreSection;
