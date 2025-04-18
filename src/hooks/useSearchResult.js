import { useEffect } from "react";
import AiModel from "../utils/gemini";
import { OPTIONS, PROMPT_RULE, SEARCH_MOVIE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieNameAndData } from "../redux/geminiSlice";

const useSearchResults = () => {
  const dispatch = useDispatch();
  const prompt = useSelector((store) => store.gemini.inputText);

  useEffect(() => {
    if (!prompt) return;

    const generateResults = async () => {
      try {
        const result = await AiModel.generateContent(prompt + PROMPT_RULE);

        let text = result.response.text();

        const firstBrace = text.indexOf("{");
        const lastBrace = text.lastIndexOf("}");
        const jsonString = text.slice(firstBrace, lastBrace + 1);

        const data = JSON.parse(jsonString);
        let mName = Object.keys(data);
        let mData = Object.values(data);

        const moviesData = await Promise.all(
          mData.map(async (movieList) => {
            const result = await Promise.all(
              movieList.map(async (movieName) => {
                try {
                  const data = await fetch(
                    SEARCH_MOVIE_URL(movieName),
                    OPTIONS
                  );
                  const json = await data.json();
                  if (json.results.length !== 0) {
                    const filterData = json.results.filter((movie) => {
                      if (movie.title === movieName) {
                        return true;
                      }
                    });

                    return filterData[0] || null;
                  }
                } catch (error) {
                  console.log(error);
                }
              })
            );
            return result.filter(Boolean);
          })
        );

        dispatch(
          addMovieNameAndData({
            movieName: mName,
            movieData: moviesData,
          })
        );
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    generateResults();
  }, [prompt, dispatch]);
};

export default useSearchResults;
