import Calc from "./_greet/Calc";

function Greet() {
  return (
    <div className={`text-center w-full video-container`}>
      <div className={` w-full h-full relative`}>
        <Calc />
        <video autoPlay loop muted className="w-full h-full object-cover video">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="p-[20px] top-0 absolute h-full w-full">
          <h1>Scroll Down to Hide the Video</h1>
          <p>More content below...</p>
        </div>
      </div>
    </div>
  );
}

export default Greet;
