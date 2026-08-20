export const InstructorSwiperCard = ({ instructor, isActive }) => {
  return (
    <div
      className={`instructor-card aspect-[3/4] overflow-hidden rounded-3xl ${
        isActive ? "is-active" : ""
      }`}
    >
      <img
        src={instructor.image}
        alt={instructor.imageAlt}
        className="block h-full w-full object-cover"
        draggable="false"
        loading="lazy"
      />
    </div>
  );
};
