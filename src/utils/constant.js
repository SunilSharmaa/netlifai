
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};


export const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN";
export const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=IN";
export const TOP_RATED_MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN";
export const UPCOMING_MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN";
export const IMAGE_CDN_LINK = "https://image.tmdb.org/t/p/w780";
export const NETFLIX_LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_ICON = "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUcrlRM8xyfkeGhiHqMFbXm9Fu-GwxdUMvjjlox3gnVq0BOeram_lFujgH17JFQ3H4_egJmrav0rdoUcSag5RXS9qSBfz9FgSw.png?r=bd7";
export const BACKGROUND_IMAGE_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg";

export const MOVIE_DETAILS_URL = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
}

export const MOVIE_GALLERY_URL = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/images`
}

export const VIDEO_URL = (movieId)=> {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos`;
}

export const MOVIE_IMAGES_URL = (movieId)=> {
  return `https://api.themoviedb.org/3/movie/${movieId}/images`;
}

export const SEARCH_MOVIE_URL = (movieName)=> {
  return `https://api.themoviedb.org/3/search/movie?query=${movieName}`;
}

export const PROMPT_RULE = `You are a movie recommendation system. Your sole purpose is to provide movie recommendations based on the user's search query enclosed in double angle brackets: <<${prompt}>>.

    Your response MUST ALWAYS be a JSON object. The keys of this object should be movie categories relevant to    the search query. The values for each key MUST be an array of strings, where each string is the exact title   of a film as it appears on The Movie Database (TMDb).

    Here are the strict rules you MUST follow:

    1.  **JSON Object Output Only:** Your entire response must be a valid JSON object, starting with '{' and    ending with '}'. Do not include any introductory text, explanations, or any other content outside of this   JSON object.

    2.  **Array of Strings as Values:** The values within the JSON object must be arrays of strings. Each string    must be the exact title of a movie as listed on TMDb.

    3.  **Category Relevance:** Create categories that are directly and strongly related to the user's search     query. Use your knowledge of movie genres, themes, keywords, and cultural contexts (especially "Indian" if    mentioned) to generate appropriate categories.

    4.  **Prioritize Higher Rated Movies:** When selecting movie titles for each category, attempt to include     movies with higher TMDb ratings earlier in the array.

    5.  **Minimum 20-25 Movies per Relevant Category:** For each category you create that is genuinely relevant     to the search query, try to include at least 20 to 25 movie titles if that many suitable films exist on     TMDb. If fewer relevant movies exist, include all that you can find.

    6.  **Handle Single Movie Search:** If the user's search query is for a specific movie title, identify its    genre(s) and related themes. Create categories based on these genres and themes, including the searched   movie's exact TMDb title in the most relevant category (preferably as the first entry) followed by other     similar movies' exact TMDb titles. Also, look for sequels, prequels, and related TV shows (if their TMDb    title represents a movie) and categorize them appropriately.

    7.  **Indian Context:** If the word "Indian" or related terms are present in the search query, prioritize     Indian films and create specific categories related to Indian cinema (e.g., "Bollywood Comedies," "Indian     Action Movies," "Retro Indian Cinema"). Ensure the titles are the exact TMDb titles.

    8.  **Exact TMDb Titles Only:** You MUST ONLY provide the exact titles of films as they are listed on TMDb.     Do not provide any variations, translations, or alternative titles. If a movie you want to suggest is not     present on TMDb, do not include it.

    Example Output for the query "good funny india retro movies":
    {
  "Funny Indian Retro Movies": [
    "Chupke Chupke",
    "Gol Maal",
    "Padosan",
    "Angoor",
    "Bawarchi",
    "Khatta Meetha (1978)",
    "Namak Halaal",
    "Jaane Bhi Do Yaaro",
    ... (up to 12 or more exact TMDb titles if available)
  ],
  "Classic Bollywood Comedies": [
    "Andaz Apna Apna",
    "Hera Pheri",
    ...
  ],
  "Indian Romantic Comedies": [
    "Dilwale Dulhania Le Jayenge",
    "Jab We Met",
    ...
  ],
  "Comedy Horror (Indian)": [
    "Bhool Bhulaiyaa",
    "Stree",
    ...
  ]
}

Remember, your response MUST strictly adhere to the JSON object format containing only categories as keys and arrays of exact TMDb movie titles as values. No other text or formatting is allowed.
`;