import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Business Evaluation",
    desc: "A web application that allows users to compare businesses and get recommendations for the best businesses in their area.",
    img: "/static/projects/business.webp",
    link: "https://business-evaluation-nine.vercel.app/",
    github: "https://github.com/adev07/business-evaluation",
    tags: [
      "React",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "React-hook-form",
    ],
  },
  {
    id: 1,
    title: "Raw Diaries",
    desc: "The Trips Booking App uses MongoDB for backend storage and Next.js with React for frontend development.",
    img: "/static/projects/rd.webp",
    link: "https://rawdiaries.vercel.app/",
    github: "https://github.com/prynsh7/rawdiaries",
    tags: [
      "React",
      "Redux",
      "NextJS",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: 2,
    title: "Perfecto - Real Estate",
    desc: "A real estate web application that allows users to search for properties and contact agents. Maps are integrated to show the location of the properties.",
    img: "/static/projects/perfecto.webp",
    link: "https://perfecto-frontend.vercel.app/",
    github: "https://github.com/adev07/perfecto",
    tags: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    title: "Notes Application",
    desc: "A full stack application that allows users to create, edit, and delete notes and also allows users to search for notes by title, content and tags.",
    img: "/static/projects/NotesApp.webp",
    link: "https://lms-frontend-5z2d.vercel.app/",
    tags: [
      "React",
      "Tailwind CSS",
      "React-Quill",
      "TypeScript",
      "Zustand",
      "Node.js",
    ],
  },
  {
    id: 5,
    title: "Curry Cook",
    desc: "A web application that facilitates seamless food ordering and delivery experiences.",
    img: "/static/projects/Currycook.webp",
    link: "https://currycook.com/",
    tags: [
      "React",
      "Tailwind CSS",
      "CSS",
      "TypeScript",
      "Axios",
      "Redux Toolkit",
    ],
  },

  {
    id: 6,
    title: "Currency Converter",
    desc: "A currency connverter app made with React and Contenxt Api",
    img: "/static/projects/currency.webp",
    link: "https://currency-converter-adev07.vercel.app/",
    github: "https://github.com/adev07/currency-converter",
    tags: ["React", "Vite", "Context Api", "Tailwind CSS"],
  },

  {
    id: 7,
    title: "To-Do App",
    desc: "A TO-DO app to keep tracking on your daily activites used firebase for authentication.",
    img: "/static/projects/Todo.webp",
    link: "https://firebase-todo-app-chi.vercel.app",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
  },

  {
    id: 8,
    title: "Digi Tracker",
    desc: "A project management software which enhance project tracking, task management, and collaboration.",
    img: "/static/projects/digitrack.webp",
    github: "https://github.com/admin-digibranders-com/digitracker-front",
    tags: ["React", "CSS", "TailwindCSS", "TypeScript"],
  },
  {
    id: 9,
    title: "IT Repeats",
    desc: "A web application that enables college students to upload and access test questions from earlier years.",
    img: "/static/projects/itrepeats.png",
    // link: "https://react-emoji-search.braydentw.vercel.app/",
    // github: "https://github.com/braydentw/react-emoji-search",
    tags: ["React", "TailwindCSS", "Node.js", "Bootstrap"],
  },

  // {
  //   id: 4,
  //   title: "Create HTML Boilerplate",
  //   desc: "Generate a vanilla HTML boilerplate in a flash!",
  //   img: "/static/projects/create-html-boilerplate.png",
  //   github: "https://github.com/BraydenTW/create-html-boilerplate",
  //   tags: ["Node", "Javascript", "NPM", "HTML"],
  // },
  // {
  //   id: 5,
  //   title: "8 Ball in your CLI",
  //   desc: "An 8 ball simulation in your CLI built with Rust!",
  //   img: "/static/projects/8ball-rust.png",
  //   github: "https://github.com/BraydenTW/8ball-rust",
  //   tags: ["Rust", "CLI", "Game"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe 😭",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
