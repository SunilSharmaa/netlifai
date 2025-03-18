import HeroSection from "../components/HeroSection";
import ExploreSection from "../components/ExploreSection";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <HeroSection />
      <ExploreSection />
    </>
  )
}

export default Browse;