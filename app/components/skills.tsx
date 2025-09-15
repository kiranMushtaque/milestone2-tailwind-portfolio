

"use client";

import React, { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  percentage: number;
  category: string;
  description: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    {
      name: "HTML",
      percentage: 100,
      category: "Frontend",
      description: "Semantic HTML5, Accessibility, SEO best practices",
    },
    {
      name: "CSS",
      percentage: 85,
      category: "Frontend",
      description: "Tailwind CSS, Responsive Design, Animations, Flexbox/Grid",
    },
    {
      name: "JavaScript",
      percentage: 75,
      category: "Frontend",
      description: "ES6+, DOM Manipulation, Async Programming, APIs",
    },
    {
      name: "TypeScript",
      percentage: 80,
      category: "Frontend",
      description: "Type Safety, Interfaces, Generics, Advanced Types",
    },
    {
      name: "React",
      percentage: 85,
      category: "Frontend",
      description: "Hooks, Context API, Component Patterns, Performance",
    },
    {
      name: "Next.js",
      percentage: 80,
      category: "Frontend",
      description: "SSR/SSG, API Routes, Image Optimization, App Router",
    },
    {
      name: "Python",
      percentage: 75,
      category: "Backend",
      description: "Django, FastAPI, Data Structures, OOP",
    },
    {
      name: "Node.js",
      percentage: 70,
      category: "Backend",
      description:
        "Express.js, REST APIs, Authentication, Database Integration",
    },
    {
      name: "Generative AI",
      percentage: 70,
      category: "AI/ML",
      description: "Prompt Engineering, LLMs, OpenAI API, LangChain",
    },
    {
      name: "Machine Learning",
      percentage: 65,
      category: "AI/ML",
      description: "TensorFlow, PyTorch, Scikit-learn, Model Training",
    },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const currentRef = skillsRef.current; // store the ref locally
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getSkillLevel = (
    percentage: number
  ): { label: string; color: string } => {
    if (percentage >= 90)
      return { label: "Expert", color: "from-green-500 to-emerald-500" };
    if (percentage >= 75)
      return { label: "Advanced", color: "from-blue-500 to-indigo-500" };
    if (percentage >= 60)
      return { label: "Intermediate", color: "from-purple-500 to-pink-500" };
    return { label: "Learning", color: "from-yellow-500 to-orange-500" };
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "Backend":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        );
      case "AI/ML":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <div ref={skillsRef} className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Technical Proficiency
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Skills & Expertise
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across various
            domains including Frontend Development, Backend Systems, and
            AI/Machine Learning.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-3">
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {category}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => {
                  const skillLevel = getSkillLevel(skill.percentage);
                  const animationDelay = categoryIndex * 0.2 + index * 0.1;

                  return (
                    <div
                      key={skill.name}
                      className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        animation: isVisible
                          ? `slideInUp 0.6s ease-out ${animationDelay}s both`
                          : "none",
                      }}
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-1">
                              {skill.name}
                            </h4>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${skillLevel.color} text-white`}
                            >
                              {skillLevel.label}
                            </span>
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {skill.percentage}%
                          </div>
                        </div>

                        <div className="relative mb-3">
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skillLevel.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: isVisible
                                  ? `${skill.percentage}%`
                                  : "0%",
                                transitionDelay: `${animationDelay + 0.3}s`,
                              }}
                            >
                              <div className="h-full bg-white bg-opacity-30 animate-pulse" />
                            </div>
                          </div>
                        </div>

                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            hoveredSkill === skill.name
                              ? "max-h-20 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-sm text-gray-600 mt-2">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <svg
              className="w-5 h-5 animate-spin-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Continuously Learning & Improving
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
