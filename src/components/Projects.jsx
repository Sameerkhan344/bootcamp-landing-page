import { useLayoutEffect, useRef, useState } from "react";
import { projectsData } from "../data/projectsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AssetsFolder from "../assets/images/projects-images/folder.webp";


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const projectImagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = projectImagesRef.current;
       const isDesktop = window.innerWidth > 424;
      const animations = [
        {
          from: {
            x: 0,
            y: 30,
            scale: 0.55,
            rotation: 0,
          },
          to: {
            x:isDesktop ? -180 : -130,
            y: -120,
            scale: isDesktop ? 0.9 : 0.8,
            rotation: -50,
          },
        },
        {
          from: {
            x: 0,
            y: 30,
            scale: 0.55,
            rotation: 0,
          },
          to: {
            x: -85,
            y: -145,
            scale:isDesktop ? 0.9 : 0.8,
            rotation: -10,
          },
        },
        {
          from: {
            x: 0,
            y: 30,
            scale: 0.55,
            rotation: 0,
          },
          to: {
            x: 0,
            y: -190,
            scale:isDesktop ? 0.9 : 0.8,
            rotation: 10,
          },
        },
        {
          from: {
            x: 0,
            y: 30,
            scale: 0.55,
            rotation: 0,
          },
          to: {
            x: isDesktop ? 150 : 90,
            y: isDesktop ? -120 : -80,
            scale: isDesktop ? 0.9 : 0.8,
            rotation: isDesktop ? 18 : 25,
          },
        },
      ];


      
      images.forEach((image, index) => {
        if (!image || !animations[index]) return;

        const { from, to } = animations[index];

        gsap.fromTo(image, from, {
          ...to,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 20%",
            scrub: 1,
            markers:true
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-20 overflow-hidden"
    >
      <div className="px-6 md:px-20 flex flex-col items-center">
        <div className="absolute hidden sm:flex top-30 left-[-30%]">
          <div
            className="absolute pointer-events-none select-none "
            style={{
              width: 700,
              height: 700,
              background:
                "radial-gradient(rgb(101, 44, 171) 0%, rgba(89, 38, 153, 0) 70%)",
              borderRadius: "50%",
              filter: "blur(8px)",
            }}
          />
        </div>

        <div className="absolute top-[-10%] right-80">
          <div
            className="absolute pointer-events-none select-none "
            style={{
              width: 700,
              height: 700,
              background:
                "radial-gradient(rgb(101, 44, 171) 0%, rgba(89, 38, 153, 0) 70%)",
              borderRadius: "50%",
              filter: "blur(8px)",
            }}
          />
        </div>

        <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white text-center flex flex-col gap-0 md:gap-2">
          <span>Real Projects. Real Complexity.</span>
          <span>Real Proof of Skill.</span>
        </h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 mt-16 md:mt-24 z-10 items-center">
          <div className="ml-8 sm:ml-0">
            <div
              className="relative flex items-center justify-center scale-[0.7] sm:scale-100 origin-center my-[-50px] sm:my-0"
              style={{ height: 500 }}
            >
              {projectsData.map((project, index) => (
                <img
                  key={project.title}
                  ref={(el) => {
                    projectImagesRef.current[index] = el;
                  }}
                  alt={`Project ${index + 1}`}
                  draggable="false"
                  className={`absolute w-[190px] md:w-[195px] object-contain rounded-xl shadow-2xl select-none pointer-events-none ${
                    activeProject === index ? "opacity-100 z-50" : "opacity-100 z-50"
                  }`}
                  src={project.image}
                />
              ))}

              <img
                alt="Industry projects folder"
                draggable="false"
                className="relative w-full max-w-[380px] object-contain drop-shadow-2xl select-none"
                src={AssetsFolder}
                style={{ zIndex: 50 }}
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            {projectsData.map((project, index) => {
              const isActive = activeProject === index;

              return (
                <div
                  key={project.title}
                  onClick={() =>
                    setActiveProject(activeProject === index ? null : index)
                  }
                  className={`rounded-2xl border-0 border-l-2 cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "border-l-primary"
                      : "border-l-white/10 hover:border-l-white/25"
                  }`}
                  style={{
                    background:
                      "linear-gradient(170deg, rgb(22, 22, 22) 0%, rgb(47, 47, 47) 100%)",
                  }}
                >
                  <div className="flex items-center justify-between px-5 py-4 gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        alt="cube"
                        className={`w-8 h-8 object-contain flex-shrink-0 transition-all duration-300 select-none ${
                          isActive ? "opacity-100" : "opacity-50"
                        }`}
                        draggable="false"
                        src={project.icon}
                      />

                      <span
                        className={`font-clash font-semibold text-base md:text-2xl transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {project.title}
                      </span>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`flex-shrink-0 transition-transform duration-350 ${
                        isActive
                          ? "rotate-180 text-white/70"
                          : "rotate-0 text-white/30"
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>

                  <div
                    className="grid transition-[grid-template-rows,opacity] duration-500 ease-in-out"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <p className="text-neutral-300 text-[1rem] font-normal leading-relaxed font-helvetica">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
