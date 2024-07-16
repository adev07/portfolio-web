import { useEffect, useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { routes } from "@/data/global";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center z-[100] ${isMenuOpen && 'bg-bg'} p-5`}
      >
        <li className="list-none font-bold text-lg">
          <Link href="/">
            <span className="font-black text-xl flex items-center">
              <img
                className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
                src="/static/logos/logo_no_text.svg"
                width="30"
              />
              {"adev07".split("").map((letter, index) => {
                return (
                  <span key={index} className="hover:text-fun-pink text-[18px] hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                    {letter}
                  </span>
                );
              })}
            </span>
          </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu-transition"
        unmountOnExit
      >
        <ul className="menu flex flex-col absolute bg-bg">
          {routes.map((item, index) => {
            return (
              <li
                className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
                key={index}
              >
                <Link href={item.path}>
                  <a className="flex w-auto pb-4">{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
