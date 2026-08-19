import { MoveRight } from "lucide-react";

const Button = ({
  title,
  variant = "primary",
  showArrow = true,
  className = "",
}) => {
  const variants = {
    primary: "bg-gradient-to-b from-[#AC69FF] to-[#7200FF] text-white",
    secondary: "bg-white text-black",
  };

  return (
    <button
      className={`
        py-3 md:py-2 px-8
        rounded-full
        font-medium
        flex items-center justify-center gap-3
        text-[1.1rem] md:text-lg
        cursor-pointer
        button-bordercolor
        hover:brightness-105
        ${variants[variant]}
        ${className}
      `}
      aria-label={title}
    >
      <span>{title}</span>

      {showArrow && <MoveRight size={40} />}
    </button>
  );
};

export default Button;
