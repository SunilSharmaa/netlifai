import { IMAGE_CDN_LINK } from "../utils/constant";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return
  return (
    <div className="mr-3 w-40 ">
        <img className="w-full min-h-60 object-cover overflow-hidden" src={IMAGE_CDN_LINK + posterPath} alt="" />
    </div>
  )
}

export default MovieCard