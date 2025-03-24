import { useDispatch } from "react-redux";
import { VIDEO_URL, OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideoKey } from "../redux/moviesSlice";

const useTrailerVideoKey = (movieId) => {
  const dispatch = useDispatch();
  let fetchVideoKey = async () => {
    let data = await fetch(VIDEO_URL(movieId), OPTIONS);
    let json = await data.json();
    console.log(json.results);

    let filterData = json.results.find(
      (key) => key.type === "Trailer" && key.name === "Official Trailer"
    );

    if(!filterData) {
      let backupKey = json.results.filter(key => key.type === "Trailer");
      console.log(backupKey[0]);
      dispatch(addTrailerVideoKey(backupKey[0]));
    } else {
      dispatch(addTrailerVideoKey(filterData));

    }

  };
  useEffect(() => {
    fetchVideoKey();
  }, [movieId]);
};

export default useTrailerVideoKey;
