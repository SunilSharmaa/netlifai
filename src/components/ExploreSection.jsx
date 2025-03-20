import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const ExploreSection = () => {
  let movieCollection = useSelector((store)=> store.movies)
  let {nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies} = movieCollection;

  // console.log(nowPlayingMovies);
  // console.log(popularMovies);
  // console.log(topRatedMovies);
  // console.log(upComingMovies);

  return (
    <div className=" relative -mt-60">
      <MovieList section={"Now Playing"} list={nowPlayingMovies}/>
      <MovieList section={"Popular"} list={popularMovies}/>
      <MovieList section={"Top Rated"} list={topRatedMovies}/>
      <MovieList section={"Up-Coming"} list={upComingMovies}/>
    </div>
  )
}

export default ExploreSection;
