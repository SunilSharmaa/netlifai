import MovieSearchBox from "../components/MovieSearchBox"

const AiMovieSearch = () => {
  return (
    <div>
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
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