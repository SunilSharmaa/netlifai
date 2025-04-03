import useTrailerVideoKey from "../hooks/useTrailerVideoKey";
import { useSelector } from "react-redux";

const BackgroundVideo = ({ movieId }) => {
  let trailerKey = useSelector((store) => store?.movies?.trailerVideoKey?.key);

  if (!movieId) return;

  useTrailerVideoKey(movieId);

  return (
    <>
      {trailerKey && (
        <div className="relative w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80"></div>
          <iframe
            className=" w-full aspect-video"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0&controls=0&disablekb=1&showinfo=0&mute=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        
      )}
    </>
  );
};

export default BackgroundVideo;
