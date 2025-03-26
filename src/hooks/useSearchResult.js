import { useEffect } from "react";
import AiModel from "../utils/gemini";
import { OPTIONS, SEARCH_MOVIE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieNameAndData } from "../redux/geminiSlice";

const useSearchResults = () => {
  const dispatch = useDispatch();
  const prompt = useSelector((store) => store.gemini.inputText);

  useEffect(() => {
    if (!prompt) return;

    const generateResults = async () => {
      const promptRule =
        ". give multiple movie , only gives name and nothing else for example - Avatar, Spider man - likes this in single line because after that i will split that in a array which have coma, do not include";

      try {
        const result = await AiModel.generateContent(prompt + promptRule);
        const movieList = result.response
          .text()
          .split(",")
          .map((m) => m.trim());

        const movieListData = await Promise.all(
          movieList.map(async (movie) => {
            const data = await fetch(SEARCH_MOVIE_URL(movie), OPTIONS);
            return data.json();
          })
        );

        dispatch(
          addMovieNameAndData({
            movieName: movieList,
            movieData: movieListData,
          })
        );
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    generateResults();
  }, [prompt, dispatch]); // Add dependencies
};

export default useSearchResults;
