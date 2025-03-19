import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const ExploreSection = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      
    </>
  )
}

export default ExploreSection;
