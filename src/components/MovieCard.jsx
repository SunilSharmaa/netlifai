import { useEffect, useState } from "react";
import { IMAGE_CDN_LINK, MOVIE_GALLERY_URL, OPTIONS } from "../utils/constant";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return;
  if (!movieId) return;
  
  const [backdropPath, setBackdropPath] = useState(null);

  useEffect(() => {
    const fetchMovieBackdrop = async () => {
      const data = await fetch(
        MOVIE_GALLERY_URL(movieId),
        OPTIONS
      );
      const json = await data.json();
      const { backdrops } = json;
      const filterData = backdrops.filter((val) => val.iso_639_1 === "en");
      setBackdropPath(filterData[0]?.file_path);
      
    };

    fetchMovieBackdrop();
  }, [movieId]);

  return (
    backdropPath && (<div className="w-26 sm:w-55">
      <img
        className="sm:hidden w-full min-h-40 max-h-40 sm:min-h-60 sm:max-h-60 mb-4 object-cover overflow-hidden rounded-lg shadow-md shadow-neutral-800"
        src={IMAGE_CDN_LINK + posterPath}
        alt=""
      />
      <img
        className="hidden sm:block w-full  mb-4 object-cover overflow-hidden rounded-xs shadow-md shadow-neutral-800"
        src={IMAGE_CDN_LINK + backdropPath}
        alt=""
      />
    </div>)
  );
};

export default MovieCard;
