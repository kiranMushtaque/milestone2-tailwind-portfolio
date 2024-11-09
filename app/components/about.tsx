import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="picture"
              src="/images/picture.jpeg"
              width={800}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              I am Kiran Mushtaque, a passionate Web Developer with expertise in
              HTML, CSS, and JavaScript. I love creating sleek, functional, and
              user-friendly web applications. One of my proudest projects is an
              ATM I built using HTML, JavaScript, and CSS. I enjoy solving
              complex problems and am constantly learning new technologies to
              improve my skills. Stay tuned for more exciting projects
            </p>
            <div className="flex justify-center">
              <Link href={"/CV/KIRAN.pdf"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About