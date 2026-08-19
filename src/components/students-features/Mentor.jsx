import Button from "../Button";

export const MentorCard = ({ image }) => {
  return (
    <>
      <div className="relative w-full aspect-[1920/1156] rounded-[1rem] overflow-hidden bg-neutral-900 border border-white/[0.06]">
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full overflow-hidden">
            <img
              src={image}
              alt="1:1 Code & Doubt Support"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full bg-[#18181B] p-4 md:p-6 flex flex-col justify-between text-left">
            <div className="flex flex-col gap-1.5 md:gap-3">
              <h4 className="font-clash text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white leading-snug">
                1:1 Code & Doubt Support
              </h4>

              <p className="font-apfel text-neutral-400 text-[10px] sm:text-xs md:text-sm font-normal leading-relaxed line-clamp-3 md:line-clamp-4">
                Get direct feedback on your code, projects and next steps
                instead of waiting for a generic answer in a crowded group.
              </p>
            </div>
            <div className="hidden sm:flex">
              <Button
                title={"Meet the Mentors"}
                showArrow={false}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden mt-4">
        <Button
          title={"Meet the Mentors"}
          showArrow={true}
          variant="secondary"
          className="w-full"
        />
      </div>
    </>
  );
};
