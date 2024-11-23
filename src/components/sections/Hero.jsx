import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "My Name is Anup Yadav",
        "I'm a Software Engineer",
        "Full Stack Developer",
        "Android Developer (React Native)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Home Section */}
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content" data-aos="fade-up" data-aos-duration="1000">
            <h2>About Me</h2>
            <p>
              Hi, I'm Anup Yadav, a passionate Software Engineer with a deep interest in building innovative solutions. I specialize in Full Stack Development, where I create seamless, scalable, and high-performing applications.
            </p>
            <p>
              With experience in React, Node.js, Python, Django, and React Native, I enjoy taking on new challenges and continually improving my skill set. I believe in clean, maintainable code and work with agile methodologies.
            </p>
            <p>
              In my free time, I love learning new technologies, experimenting with new ideas, and exploring the ever-evolving field of software engineering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
