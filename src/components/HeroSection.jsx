import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  if (!nowPlayingMovies) return;

  const { id, overview, original_language, poster_path } = nowPlayingMovies[0];

  return (
    <>
      <BackgroundVideo movieId={id} poster={poster_path} />
      <VideoTitle
        movieId={id}
        overview={overview}
        language={original_language}
      />
    </>
  );
};

export default HeroSection;
