import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { NOW_PLAYING_URL, OPTIONS } from "../utils/constant";

const useNowPlayingMovies = async()=> {
    const dispatch = useDispatch();
    let data = await fetch(NOW_PLAYING_URL, OPTIONS)
    let json = await data.json();
    dispatch(addNowPlayingMovies(json.results))

}

export default useNowPlayingMovies;