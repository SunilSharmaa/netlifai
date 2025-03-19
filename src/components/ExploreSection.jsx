import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const ExploreSection = () => {
  usePopularMovies();
  useTopRatedMovies();
  return (
    <>
      
    </>
  )
}

export default ExploreSection;
