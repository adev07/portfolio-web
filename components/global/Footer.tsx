import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css"

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 z-5 bg-bg">
      <div className="border-t border-fun-pink-dark">
        <div className="py-[60px] sm:flex justify-between sm:mx-[68px] items-center ">
          <div className="text-[#fff]">
            <h3 className="text-[32px] custom-spacing-footer2">
              Aditya Anand
            </h3>
            <p className="custom-fonts text-[13px] opacity-[50%] custom-spacing-footer">
              "Curiosity and consistency will always beat talent."
            </p>
          </div>
          <div className="mt-2 sm:mt-[0px]">
            <div className="text-[#fff] pb-2 opacity-[50%]">
              Let's Connect
            </div>
            <div className="flex gap-4 cursor-pointer">
              <a href="https://www.linkedin.com/in/aditya-anand-748139226/" target="_blank" rel="noopener noreferrer">
                <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                  <i className="text-[#fff] bi bi-linkedin"></i>
                </div>
              </a>
              <a href="https://github.com/adev07" target="_blank" rel="noopener noreferrer">
                <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                  <i className="text-[#fff] bi bi-github"></i>
                </div>
              </a>
              <a href="mailto:adityaanand1245@gmail.com">
                <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                  <i className="text-[#fff] bi bi-google"></i>
                </div>
              </a>
              <a href="https://twitter.com/AdityaA68413019" target="_blank" rel="noopener noreferrer">
                <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#fff] bg-opacity-[10%] rounded-full">
                  <i className="text-[#fff] bi bi-twitter"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:adityaanand1245@gmail.com"
              className="text-fun-gray-light font-medium"
            >
              Aditya Anand
            </a>
            . All rights reserved.
          </div>
        </p>
      </div>
      {/* <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/braydentw/braydentw.io"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div> */}
    </footer>
  );
}

export default Footer;
