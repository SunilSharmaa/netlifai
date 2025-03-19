import { useEffect } from "react";
import { OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constant"
import { useDispatch } from "react-redux";
import {addTopRatedMovies} from "../redux/moviesSlice";

const useTopRatedMovies = ()=> {
    let dispatch = useDispatch();

    let fetchTopRatedMovies = async()=> {
        let data = await fetch(TOP_RATED_MOVIES_URL, OPTIONS);
        let json = await data.json();
        
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=> {
        fetchTopRatedMovies();
    },[dispatch])
}

export default useTopRatedMovies;