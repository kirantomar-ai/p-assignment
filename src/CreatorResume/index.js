import React from "react";
import "./creator.css"

const CreatorPage = () => {
  return (
    <>
      <div className="creator-page">
        <h1>👨‍💻 Kiran Tomar</h1>
        <p className="role">Software Engineer at Neumetric</p>

        <section>
          <h2>📞 Contact</h2>
          <ul>
            <li>Email: tomarkiran804@gmail.com</li>
            <li>Phone: +91-8766292313</li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/kiran-tomar-02b4bb235/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/kiran-tomar
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/kirantomar-ai" target="_blank" rel="noopener noreferrer">
                github.com/kirantomar-ai
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>💼 Skills</h2>
          <p>
            <strong>Languages:</strong> JavaScript, HTML, CSS, Python, Ruby on Rails<br />
            <strong>Frameworks:</strong> React, Redux, Node.js<br />
            <strong>Databases:</strong> MySQL, MongoDB
          </p>
        </section>

        <section>
          <h2>🏢 Experience</h2>
          <h4>Neumetric (Nov 2023 – Present)</h4>
          <ul>
            <li>Built entire frontend using React + Redux across Arc, Central, Guide, and Continuer platforms.</li>
            <li>Integrated OpenAI API for AI-powered incident analysis (cut time by 40%).</li>
            <li>Developed dashboards, reusable components, and handled backend in Ruby on Rails + MySQL.</li>
          </ul>

          <h4>MP Police (Sep 2021 – Jul 2023)</h4>
          <ul>
            <li>Worked on CCTNS enhancements, reporting & analytics for criminal data.</li>
            <li>Represented department in tech system discussions and feature planning.</li>
          </ul>
        </section>

        <section>
          <h2>📚 Education</h2>
          <p>
            <strong>MS in Computer Science</strong>, Woolf University, 2026<br />
            <strong>B.E.</strong>, RGPV Bhopal, 8.23 CGPA<br />
            <strong>CBSE 12th</strong>, 94.6%
          </p>
        </section>

        <section>
          <h2>🚀 Projects</h2>
          <ul>
            <li>
              <a href="https://apnigully.com" target="_blank" rel="noopener noreferrer">ApniGully</a>: Connecting local businesses with customers (React + Redux)
            </li>
            <li>
              <a href="https://motormechanic.co.in/" target="_blank" rel="noopener noreferrer">MotorMechanic</a>: Vehicle service platform (React + Redux)
            </li>
            <li>
              <a href="https://heroic-pithivier-7f011e.netlify.app/" target="_blank" rel="noopener noreferrer">Resume Builder App</a>: Create resumes via web UI
            </li>
            <li>
              <a href="https://book-movie-ticket.onrender.com/" target="_blank" rel="noopener noreferrer">Showbuzz</a>: Book movie tickets (React + Node.js)
            </li>
            <li>
              <a href="https://github.com/kirantomar-ai/database-visualizer" target="_blank" rel="noopener noreferrer">Database Visualizer</a>: Visualize DB content (MERN stack)
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default CreatorPage;
