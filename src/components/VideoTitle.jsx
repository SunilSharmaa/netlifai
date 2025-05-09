import { useEffect, useState } from "react";
import { IMAGE_CDN_LINK, MOVIE_IMAGES_URL, OPTIONS } from "../utils/constant";

const VideoTitle = ({ movieId, overview, language }) => {
  let [logoPath, setLogoPath] = useState(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const data = await fetch(MOVIE_IMAGES_URL(movieId), OPTIONS);
      const json = await data.json();

      let filterData = json.logos.filter((data) => data.iso_639_1 === language);

      setLogoPath(IMAGE_CDN_LINK + filterData[0].file_path);
    };

    fetchLogo();
  }, [movieId]);

  return (
    <div>
      <div className="hidden lg:block absolute lg:top-[60%] md:top-[60%] top-[50%] -translate-[50%] w-[90%]  left-[50%] -translate-x-[50%] ">
        <div className=" w-[35%]">
          <img className="w-[70%]" src={logoPath} alt="imageLogo" />
          <p className="text-white text-[90%] mt-4 pl-2 leading-tight">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
