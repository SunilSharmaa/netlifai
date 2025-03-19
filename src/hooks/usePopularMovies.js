import { useEffect } from "react";
import { OPTIONS, POPULAR_MOVIES_URL } from "../utils/constant"
import {addPopularMovies} from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = ()=> {
    let dispatch = useDispatch();

    let fetchPopularMovies = async()=> {
        let data = await fetch(POPULAR_MOVIES_URL, OPTIONS);
        let json = await data.json();
        
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=> {
        fetchPopularMovies();
    },[])
}

export default usePopularMovies;