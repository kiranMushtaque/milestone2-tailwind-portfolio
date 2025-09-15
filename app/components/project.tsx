
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectType {
  title: string;
  description: string;
  link: string;
  image: string; 
}

const projects: ProjectType[] = [
  {
    title: "Food Truck Website",
    description: "Food Truck site, sleek and modern.",
    link: "https://hackathon-day-3-4e59.vercel.app/",
    image: "/images/food-truck.png",
  },
  {
    title: "Asia Water Website",
    description: "Professional website design.",
    link: "https://www.asiapremiumwater.com/",
    image: "/images/asia-water.png",
  },
  {
    title: "Calculator",
    description: "Awesome calculator using HTML, JS, CSS.",
    link: "https://quick-calc-gold.vercel.app/",
    image: "/images/calculator.png",
  },
  {
    title: "Currency Convertor",
    description: "Sleek currency convertor.",
    link: "https://currency-convertor-two-zeta.vercel.app/",
    image: "/images/currency-converter.png",
  },
  {
    title: "Word Countor",
    description: "Functional word countor.",
    link: "https://word-counter-one-delta.vercel.app/",
    image: "/images/word-counter.png",
  },
  {
    title: "Number Guessing Game",
    description: "Fun number guessing game.",
    link: "https://number-gussing-game-eight.vercel.app/",
    image: "/images/number-gussing-game.png",
  },
  {
    title: "Todo App",
    description: "Functional Todo app.",
    link: "https://colorful-todo-list.vercel.app/",
    image: "/images/todo.png",
  },
  {
    title: "Quiz App",
    description: "Quiz app built using HTML, JS, CSS.",
    link: "https://quick-calc-gold.vercel.app/",
    image: "/images/quiz.png",
  },
  {
    title: "ATM Project",
    description: "ATM interface using HTML, JS, CSS.",
    link: "https://quick-calc-gold.vercel.app/",
    image: "/images/atm.png",
  },

  {
    title: "Donation App",
    description: "User-friendly donation app.",
    link: "https://donation-app-bay.vercel.app/",
    image: "/images/donation.png",
  },
  {
    title: "Dictionary App",
    description: "Sleek dictionary app.",
    link: "https://dictionaryapp-93ewwj6h2ysrmsdpaobq5d.streamlit.app/",
    image: "/images/dictionary.png",
  },
  {
    title: "Spin the Wheel App",
    description: "Fun Spin the Wheel game.",
    link: "https://spinthewheelgame-app-nycmv3qr7b23edguwmvbtp.streamlit.app/",
    image: "/images/spin-wheel.png",
  },
  {
    title: "Password Strength Meter",
    description: "Secure password meter app.",
    link: "https://passwordmeterpy-git-sdvscvvxg6xog5gisbtvtb.streamlit.app/",
    image: "/images/password-meter.png",
  },
];

const Project: React.FC = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>

          <div className="flex flex-wrap -m-8">
            {projects.map((project, idx) => (
              <div key={idx} className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                <div className="flex relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      {project.title} Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline mt-2">
                        View Project...
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
