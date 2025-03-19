import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const HeroSection = () => {

  const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies);
  if(!nowPlayingMovies) return;
  
  const {original_title, id, overview} = nowPlayingMovies[0];
  
  return (
    <>
      <BackgroundVideo movieId={id}/>
      <VideoTitle title={original_title} overview={overview}/>
    </>
  );
};

export default HeroSection;
