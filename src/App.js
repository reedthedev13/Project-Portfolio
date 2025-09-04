import React, { useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import "./index.css";

function App() {
  // Modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal handler
  const openModal = () => setIsModalOpen(true);
  // Close modal handler
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Skills />
      <Projects />

      {/* Button to open the modal */}
      <div className="text-center my-8">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-teal-400 rounded hover:bg-blue-900 transition"
        >
          Show Portfolio Details
        </button>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Portfolio Overview"
      >
        <>
          <h3 className="text-xl font-semibold mb-3 text-white">
            Thanks for viewing my portfolio!
          </h3>
          <p className="text-gray-300">
            I am a passionate full-stack software developer with a focus on
            building scalable, maintainable, and user-friendly full-stack web
            applications. My projects showcase a strong foundation in modern web
            technologies including React, JavaScript, Typescript, TailwindCSS,
            and backend development with Node.js, GO, and Python.
          </p>
          <p className="mt-3 text-gray-300">
            Throughout my portfolio, you'll find a variety of projects
            demonstrating my skills in:
          </p>
          <ul className="list-disc list-inside mt-2 mb-3 text-sm text-gray-300">
            <li>Building responsive and accessible user interfaces</li>
            <li>State management and client-server communication</li>
            <li>Writing clean, maintainable, and well-documented code</li>
            <li>Using version control with Git and collaborative workflows</li>
            <li>Integrating backend services</li>
          </ul>
          <p className="text-gray-300">
            Feel free to explore the projects and reach out if you want to
            collaborate or discuss opportunities. Thank you for visiting!
          </p>

          <button
            onClick={closeModal}
            className="mt-6 px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
          >
            Close
          </button>
        </>
      </Modal>

      <Contact />
    </div>
  );
}

export default App;
