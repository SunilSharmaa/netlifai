import useTrailerVideoKey from "../hooks/useTrailerVideoKey";
import { useSelector } from "react-redux";
import { IMAGE_CDN_LINK, MOVIE_DETAILS_URL, OPTIONS } from "../utils/constant";
import { useEffect, useState } from "react";
import React from "react";

const BackgroundVideo = ({ movieId, poster }) => {
  const [genres, setGenres] = useState(null);
  let trailerKey = useSelector((store) => store?.movies?.trailerVideoKey?.key);

  if (!movieId) return;

  useTrailerVideoKey(movieId);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await fetch(
        MOVIE_DETAILS_URL(movieId),
        OPTIONS
      );
      const json = await data.json();
      const { genres } = json;
      if(genres.length > 3) {
        const limitedGenres = genres?.slice(0,4)
        setGenres(limitedGenres);
      } else {
        setGenres(genres);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {trailerKey && (
        <div>
          <div className="hidden sm:block relative w-full aspect-video overflow-hidden -top-10">
            {" "}
            {/* Added overflow-hidden */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80"></div>
            <iframe
              className="w-full aspect-video object-cover"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0&controls=0&disablekb=1&showinfo=0&mute=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              style={{ border: "none" }} // Optional: Remove iframe border
            ></iframe>
          </div>

          <div className="sm:hidden w-full h-[90svh] bg-neutral-900 flex justify-center items-end px-4 pb-8">
            <div className="relative w-full max-w-[90vw] rounded-xl overflow-hidden  shadow-lg shadow-neutral-700">
              <img
                src={IMAGE_CDN_LINK + poster}
                alt="poster"
                className="w-full h-full object-cover"
              />
              <div className=" pb-6 absolute bottom-0 w-full text-white bg-gradient-to-t from-black pt-20">
                <ul className="flex flex-wrap justify-center items-center text-white gap-1 text-sm mb-2">
                  {genres &&
                    genres.map((gen, index) => (
                      <React.Fragment key={gen.id}>
                        
                        <li>{gen.name}</li>
                        {index < genres.length - 1 && (
                          <span className="text-red-600 text-xl flex items-center">
                            |
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                </ul>

                <div className="flex justify-center space-x-2 text-base">
                  <button className="bg-white text-neutral-900 px-8 py-1 rounded">
                    Play
                  </button>
                  <button className="bg-neutral-800 text-white px-8 py-1 rounded">
                    MyList
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundVideo;
