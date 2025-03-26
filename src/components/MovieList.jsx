import MovieCard from "./MovieCard";

const MovieList = ({section, list}) => {
  if(!section || !list) return
  
  return (
    <div className="mt-4 ml-12 mr-12 mx-auto flex overflow-x-auto scrollbar-hide flex-col">
      <h2 className="text-2xl font-semibold mb-2 text-white mt-2">{section}</h2>
      <div className="flex">
      <div className=" flex">
          {list.map((movie)=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
      </div>
      </div>
    </div>
  )
}

export default MovieList