import { IMAGE_CDN_LINK } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  
  return (
    <div className="w-26 sm:w-40">
      <img
        className="w-full min-h-40 max-h-40 sm:min-h-60 sm:max-h-60 mb-4 object-cover overflow-hidden rounded-lg shadow-md shadow-neutral-800"
        src={IMAGE_CDN_LINK + posterPath}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
