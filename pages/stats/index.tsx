import Page from '@/components/utility/Page'
import React from 'react'
import { skills } from "@/data/content/home";

type Props = {}

const index = (props: Props) => {
  return (
    <Page
      currentPage="Stats"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also." }}
    >
      <div className="container">
        <div className='py-16'>
          <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
            Tech Stack
            <img
              className="sqD w-10 -top-8 -right-12 absolute"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
          <p className="text-fun-gray text-xl sm:text-2xl">
            Languages, Frameworks, Tools, and Abilities
          </p>
        </div>
        <div className="relative grid grid-cols-6 sm:grid-cols-12 gap-2">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-12 mx-auto flex items-center flex-col justify-center"
              >
                <img src={item.icon} style={item.style} />
                <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className='mt-[90px]'>
          <h1 className="text-3xl sm:text-3xl font-bold inline-block w-auto mb-8 relative">
            Here are my GitHub metrics for your analysis.
            <img
              className="sqD w-12 -top-6 -right-8 absolute"
              src="/static/doodles/skills/fillStar.svg"
            />
          </h1>
        </div>

        <div className="grid sm:grid-cols-3 sm:gap-0 gap-2 items-center justify-center">
          <div className="col-span-1">
            <div className="flex items-center justify-center"
              title="GitHub Stats"
            >
              <img
                className="w-90"
                src="https://github-readme-stats.vercel.app/api?username=adev07&show_icons=true&theme=react&border_color=61dafb&hide_border=true"
                alt="GitHub Stats"
              />
            </div>
          </div>
          <div className='col-span-1'>
            <div className='flex items-center justify-center'
              title="Top Languages"
            >
              <img
                className="w-full sm:h-40 h-full"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=adev07&title_color=61dafb&text_color=ffffff&icon_color=61dafb&bg_color=20232a&langs_count=8&layout=compact&border_color=61dafb&hide_border=true"
                alt="Top Languages"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className='flex items-center justify-center'
              title="GitHub Streak"
            >
              <img
                className="w-90"
                src="https://github-readme-streak-stats.herokuapp.com/?user=adev07&theme=react&border=61dafb&hide_border=true"
                alt="GitHub Streak"
              />
            </div>
          </div>
          {/* <div className='col-span-1'></div> */}
          {/* <div className='col-span-2'>
            <div className='flex items-center justify-center'
              title="Top Languages"
            >
              <img
                className="w-90"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=adev07&title_color=61dafb&text_color=ffffff&icon_color=61dafb&bg_color=20232a&langs_count=8&layout=compact&border_color=61dafb&hide_border=true"
                alt="Top Languages"
              />
            </div>
          </div> */}
        </div>

        <div className='mt-[90px]'>
          <h1 className="text-3xl sm:text-3xl inline-block w-auto mb-8 relative font-bold">
            Dev Quotes
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical"
              alt="Developer Quotes"
            />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default index