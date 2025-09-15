




"use client";
import React, { useState } from "react";
import Image from "next/image";

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="bg-white py-20 text-gray-900">
      <div className="container mx-auto flex flex-col items-center px-6 md:flex-row md:items-start md:gap-16">
        {/* Profile Image */}
        <div className="mb-10 flex justify-center md:mb-0 md:w-1/3">
          <div className="overflow-hidden rounded-full border-4 border-indigo-100 shadow-lg w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/images/profile.png" // apni profile image ka path
              alt="Kiran Mushtaque"
              width={224}
              height={224}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            I am{" "}
            <span className="font-semibold text-indigo-600">
              Kiran Mushtaque
            </span>
            , a passionate web developer focused on building modern, scalable,
            and user-friendly applications with technologies like
            <span className="font-medium">
              {" "}
              Next.js, TypeScript, and Tailwind CSS
            </span>
            . I enjoy solving problems and creating impactful digital solutions
            that combine clean design with solid engineering.
          </p>

          {showMore && (
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Along with frontend expertise, I explore
              <span className="font-medium"> Python and AI workflows</span> to
              integrate intelligence into web apps. My goal is to contribute to
              projects that make a difference while continuously growing as a
              developer.
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 rounded-full border border-indigo-300 px-6 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
