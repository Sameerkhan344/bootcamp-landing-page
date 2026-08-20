import { Menu } from "lucide-react";
import { Link } from "react-router";
import Button from "./Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-101 px-6 md:px-12 transition-all duration-300 py-4 bg-black/20 backdrop-blur-md translate-y-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center h-8 md:h-10 hover:opacity-90 transition-opacity"
          aria-label="bootcamp"
        >
          <img
            className="h-full"
            alt="sheryians-logo"
            src="/logo.svg"
          />
        </Link>
        <div className="hidden md:flex items-center bg-white/[0.04] border border-white/[0.08] px-8 py-2.5 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06]">
          <div className="flex items-center gap-9">
            <Link
              href={"/"}
              className="font-clash text-[0.95rem] font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="font-clash text-[0.95rem] font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="font-clash text-[0.95rem] font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200"
            >
              Bootcamp
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Button title="Apply Now!" showArrow={false} variant="secondary" />
        </div>
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;
