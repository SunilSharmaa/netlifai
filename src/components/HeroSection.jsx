import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const HeroSection = () => {

  const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies);
  if(!nowPlayingMovies) return;
  
  const {original_title, id, overview, original_language} = nowPlayingMovies[0];
  
  return (
    <>
      <BackgroundVideo movieId={id} language={original_language}/>
      <VideoTitle movieId={id} overview={overview} language={original_language}/>
    </>
  );
};

export default HeroSection;
