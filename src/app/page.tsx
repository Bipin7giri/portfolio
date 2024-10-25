/* eslint-disable react/no-unescaped-entities */
// src/App.tsx
import React from "react";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Bipin Giri 👋</h1>
        <p className="text-gray-600">JavaScript/TypeScript Developer</p>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600">
          I'm a dedicated JavaScript/TypeScript developer who's enthusiastic
          about crafting top-notch web and mobile applications. My journey in
          the coding realm began with the thrill of building my first "Hello
          World" program, and since then, I've been on an exciting path of
          continual learning and growth.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tech Stack
        </h2>
        <ul className="text-gray-600 list-disc pl-5">
          <li>
            <strong>Frontend</strong>: Proficient in creating captivating user
            interfaces using React.js and Next.js. I excel in crafting
            responsive designs and managing state with Redux (Saga and Thunk).
          </li>
          <li>
            <strong>Backend</strong>: I've got your backend needs covered with
            Node.js and Nest.js. Whether it's architecting RESTful APIs or
            developing robust endpoints, I relish building scalable and
            maintainable server-side solutions.
          </li>
          <li>
            <strong>Mobile</strong>: My expertise extends to mobile app
            development using React Native, delivering a native experience on
            both iOS and Android.
          </li>
        </ul>
      </section>

      {/* DevOps and Infrastructure Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          DevOps and Infrastructure
        </h2>
        <p className="text-gray-600">
          Apart from development, I'm well-versed in DevOps practices and cloud
          infrastructure. I have experience setting up and configuring virtual
          private servers (VPS) on platforms like EC2. I'm comfortable with
          light shell scripting and creating scheduled tasks using cron jobs.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-600">
          I'm thrilled to connect with fellow developers and tech enthusiasts.
          Reach out to me on
          <a
            href="https://www.linkedin.com/in/bipin-giri"
            className="text-blue-600 underline"
          >
            {" "}
            LinkedIn
          </a>
          and explore my{" "}
          <a href="#" className="text-blue-600 underline">
            Portfolio
          </a>
          . Thanks for stopping by, and I'm eager to collaborate on exciting
          projects and continue pushing the boundaries of what's achievable with
          JavaScript/TypeScript!
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Bipin Giri. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
