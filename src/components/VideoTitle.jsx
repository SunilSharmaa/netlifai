const VideoTitle = ({title, overview}) => {
  
  return (
    <div className="absolute top-[50%] left-[5%] w-[30%] border border-amber-100 p-4 rounded-2xl">

      <h1 className="text-white text-3xl font-bold">{title}</h1>
      <p className="text-white mt-4">{overview}</p>
    </div>
  )
};

export default VideoTitle;
