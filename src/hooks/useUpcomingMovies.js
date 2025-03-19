import { useEffect } from "react";
import { OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = ()=> {
    let dispatch = useDispatch();

    let fetchUpcomingMovies = async()=> {
        let data = await fetch(UPCOMING_MOVIES_URL, OPTIONS);
        let json = await data.json();
        
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=> {
        fetchUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;