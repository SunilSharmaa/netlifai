import HeroSection from "../components/HeroSection";
import ExploreSection from "../components/ExploreSection";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="bg-neutral-900 pb-4">
      <HeroSection />
      <ExploreSection />
    </div>
  )
}

export default Browse;