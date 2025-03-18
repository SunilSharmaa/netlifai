import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { NOW_PLAYING_URL, OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  let fetchMovies = async () => {
    let data = await fetch(NOW_PLAYING_URL, OPTIONS);
    let json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useNowPlayingMovies;
