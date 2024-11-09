import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-8">
            {/* projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="calculator"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/calutaor.PNG"
                  width={800}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Calculator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className="leading-relaxed">
                    I will just built an awesome calculator using HTML,
                    JavaScript, and CSS! Its functional, sleek, and efficient.
                    Feeling proud of this project and excited to share more
                    creations soon
                  </p>
                  <Link href={"https://quick-calc-gold.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="curency"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/curency convertor.PNG"
                  width={800}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Curency Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Curency
                  </h1>
                  <p className="leading-relaxed">
                    I will just built an awesome Curency convertor using HTML,
                    JavaScript, and CSS! Its functional, sleek, and efficient.
                    Feeling proud of this project and excited to share more
                    creations soon
                  </p>
                  <Link href={"https://quick-calc-gold.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects  2*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="word countor"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/word countor.PNG"
                  width={800}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    word countor Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    word countor
                  </h1>
                  <p className="leading-relaxed">
                    I will just built an awesome word countor using HTML,
                    JavaScript, and CSS! Its functional, sleek, and efficient.
                    Feeling proud of this project and excited to share more
                    creations soon
                  </p>
                  <Link href={"https://quick-calc-gold.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects  3*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="number gussing game"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/number gussing game.PNG"
                  width={800}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    number gussing Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    number gussing
                  </h1>
                  <p className="leading-relaxed">
                    I will just built an awesome number gussingusing HTML,
                    JavaScript, and CSS! Its functional, sleek, and efficient.
                    Feeling proud of this project and excited to share more
                    creations soon
                  </p>
                  <Link href={"https://quick-calc-gold.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects 4*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="todo"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/todo.PNG"
                  width={800}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Todo Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Todo
                  </h1>
                  <p className="leading-relaxed">
                    I will just built an awesome Todo using HTML, JavaScript,
                    and CSS! Its functional, sleek, and efficient. Feeling proud
                    of this project and excited to share more creations soon
                  </p>
                  <Link href={"https://quick-calc-gold.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects 5*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="quiz"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/quiz.PNG"
                  width={800}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Quiz Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Quiz
                  </h1>
                  <p className="leading-relaxed">
                    I will just built an awesome Quiz using HTML, JavaScript,
                    and CSS! Its functional, sleek, and efficient. Feeling proud
                    of this project and excited to share more creations soon
                  </p>
                  <Link href={"https://quick-calc-gold.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* project 6*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="Atm"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/atm.PNG"
                  width={800}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Atm Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Atm
                  </h1>
                  <p className="leading-relaxed">
                    I will just built an awesome ATM using HTML, JavaScript, and
                    CSS! Its functional, sleek, and efficient. Feeling proud of
                    this project and excited to share more creations soon
                  </p>
                  <Link href={"https://quick-calc-gold.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;