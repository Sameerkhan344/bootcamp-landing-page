import { Volume2, VolumeX } from "lucide-react";
import Button from "./Button";
import { useRef, useState } from "react";
import videoSrc from "../assets/videos/VID-20260721-WA0006.webm";

const WhyKodr = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  return (
    <div className="h-auto md:min-h-screen w-full bg-cover lg:bg-contain bg-center flex items-center justify-center p-0 md:p-4 relative overflow-hidden bg-[url('https://px.pixxo.io/sheryians/kodr_assets/Background_002.png')]">
      <div className="mt-30 relative">
        <div className="relative z-10 mx-4 md:mx-10 rounded-2xl border border-white/30 bg-[#0A0A0C]/20 backdrop-blur-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-4 md:gap-10 overflow-hidden shadow-2xl">
          <div className="relative w-full lg:w-[60%] aspect-video rounded-2xl overflow-hidden border border-white/[0.08] shadow-inner bg-black flex-shrink-0 group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />

            <button
              onClick={handleMute}
              className="absolute bottom-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto active:scale-95 cursor-pointer shadow-lg"
              aria-label="Unmute video"
            >
              {isMuted ? <VolumeX size={30} /> : <Volume2 size={30} />}
            </button>
          </div>
          <div className="relative w-full lg:w-[35%] flex flex-col items-start gap-2 md:gap-6 text-left">
            <span className="bg-white text-[#7200FF] text-[10px] md:text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-md inline-block uppercase">
              Placement Cycle
            </span>

            <div>
              <h2 className="font-apfel text-2xl md:text-3xl font-bold text-white uppercase leading-tight">
                KUSHAGRA PATIDAR
              </h2>

              <p className="font-apfel text-neutral-300 font-normal text-xs md:text-sm leading-snug">
                Sheryians Placement Success Story
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-apfel text-4xl md:text-6xl font-extrabold text-[#6FEB2C]">
                  ₹47 LAKHS
                </span>

                <span className="font-clash text-white text-base md:text-lg font-medium">
                  /Annum
                </span>
              </div>

              <p className="font-helvetica text-neutral-300 text-sm md:text-base font-normal leading-snug">
                Secured A Package At{" "}
                <span className="font-bold text-white">Amazon.</span>
              </p>
            </div>

            <div className="mt-5 md:mt-10 w-full md:w-auto">
              <div className="flex sm:hidden">
                <Button
                  className=""
                  title={"Watch His Journey"}
                  className={"w-full"}
                  showArrow={true}
                  variant="primary"
                />
              </div>
              <div className="w-full hidden sm:flex">
                <Button
                  title={"Watch His Placement Journey"}
                  showArrow={true}
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="top-[-7%] sm:top-[-8%] md:top-[-8%] lg:top-[-18%] w-[40%] xl:top-[-21%] absolute z-0 opacity-10 left-1/2 -translate-x-1/2">
          <img
            className="h-full w-full"
            alt=""
            src="https://px.pixxo.io/sheryians/kodr_assets/kodr_Second.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyKodr;
