
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};


export const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const IMAGE_CDN_LINK = "https://image.tmdb.org/t/p/w780";

export const VIDEO_URL = (movieId)=> {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos`;
}

export const MOVIE_IMAGES_URL = (movieId)=> {
  return `https://api.themoviedb.org/3/movie/${movieId}/images`;
}

export const SEARCH_MOVIE_URL = (movieName)=> {
  return `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US&page=1`;
}