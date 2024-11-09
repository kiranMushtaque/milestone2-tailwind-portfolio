"use client";
import React from "react";
import Image from 'next/image';
import Typewriter from "typewriter-effect";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hello I am
              <Typewriter
                options={{
                  strings: [
                    "Kiran Mushtaque",
                    "Web Developer",
                    "Skilled in HTML, CSS & TypeScript",
                    "Next.js Developer",
                  ],

                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700"></div>
            <p className="mb-6 text-lg sm:text-xl leading-relaxed">
              A passionate Web Developer & Artificial Intelligence <br />{" "}
              Enthusiast, building innovative solutions.
            </p>
            <p className="mb-6 text-lg sm:text-xl leading-relaxed">
              I am continuously exploring new technologies and creating
              impactful web applications.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="Web Developer & AI Enthusiast"
              src="/images/2824139.jpg"
              width={600}
              height={80}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
