import MovieSearchBox from "../components/MovieSearchBox"
import { BACKGROUND_IMAGE_URL } from "../utils/constant"

const AiMovieSearch = () => {
  return (
    <div>
        <img
        src={BACKGROUND_IMAGE_URL}
        alt="background image"
        className="h-screen w-full fixed object-cover"
      />
      <div className=" inset-0 bg-black opacity-75 fixed"></div>

      <div className="bg-black">
      <MovieSearchBox />
      
      </div>
    </div>
  )
}

export default AiMovieSearch