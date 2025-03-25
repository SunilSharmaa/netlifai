import { useEffect } from "react";
import AiModel from "../utils/gemini";

const SearchResults = () => {
    const generateResults = async() => {

        const prompt = "best indian thriller movie";
        const promptRule = ". give multiple movie , only gives name and nothing else for example - Avatar, Spider man - likes this in single line because after that i will split that in a array which  have coma";
        const result = await AiModel.generateContent(prompt + promptRule);
        const movieList = result.response.text().split(",")
        console.log(movieList);
    }

    useEffect(()=> {
        generateResults();
    })

    return (
        <>
        
        </>
    )
}

export default SearchResults;