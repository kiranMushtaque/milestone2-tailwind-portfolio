
"use client";

import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const expertiseTags = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "AI",
] as const;

const gradientMap: Record<(typeof expertiseTags)[number], string> = {
  "Next.js": "from-indigo-50 via-white to-sky-100",
  TypeScript: "from-sky-50 via-white to-cyan-100",
  "Tailwind CSS": "from-purple-50 via-white to-indigo-100",
  Python: "from-amber-50 via-white to-emerald-100",
  AI: "from-violet-50 via-white to-indigo-100",
};

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mounted, setMounted] = useState(false); // track client mount

  useEffect(() => {
    setMounted(true); // mark as mounted
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expertiseTags.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // prevent server/client mismatch

  const gradientClass =
    gradientMap[expertiseTags[activeIndex]] ?? "from-gray-50 to-gray-100";

  return (
    <main
      id="home"
      className={`relative min-h-screen bg-gradient-to-br ${gradientClass} transition-colors duration-700 flex items-center justify-center text-gray-900 px-6`}
    >
      <section className="relative max-w-3xl text-center rounded-2xl border border-white/50 bg-white/70 backdrop-blur-sm px-8 py-16 shadow-xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Hi, I’m Kiran Mushtaque
        </h1>

        <div className="mt-4 text-xl font-semibold text-indigo-600">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Next.js Enthusiast",
                "Python Learner",
                "AI Explorer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </div>

        <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto">
          I build modern, scalable, and user-focused web applications. My focus
          is on combining clean design with solid engineering.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#project"
            className="rounded-full bg-indigo-600 px-7 py-3 text-white font-semibold shadow-lg hover:bg-indigo-700 transition hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-indigo-200 px-7 py-3 text-indigo-600 font-semibold hover:border-indigo-400 hover:text-indigo-700 transition hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {expertiseTags.map((tag, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={tag}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-indigo-300 bg-indigo-100 text-indigo-800 shadow"
                    : "border-indigo-100 bg-white/80 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
                aria-pressed={isActive}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Hero;
