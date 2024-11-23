import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useState } from "react";

// Lazy load components
const Hero = lazy(() => import("./components/sections/Hero"));
const Skills = lazy(() => import("./components/sections/Skills"));
const StarCanvas = lazy(() => import("./components/canvas/Stars"));
const Education = lazy(() => import("./components/sections/Education"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));
const ProjectDetails = lazy(() => import("./components/Dialog/ProjectDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  color: ${({ theme }) => theme.primary}; /* Default text color */
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
    141.27deg,
    rgba(56, 189, 248, 0) 50%,    
    rgba(56, 189, 248, 0.15) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const ThemeSwitcher = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: fixed;
  top: 20px;
  right: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isDarkTheme, setIsDarkTheme] = useState(true); // state to toggle themes

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log("Theme switched to:", isDarkTheme ? "Light" : "Dark"); // Debug log
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Suspense fallback={<div>Loading...</div>}>
            <StarCanvas />
          </Suspense>

          <AnimatePresence>
            <Suspense fallback={<div>Loading Hero...</div>}>
              <Hero />
            </Suspense>

            <Wrapper>
              <Suspense fallback={<div>Loading Sections...</div>}>
                <Skills />
                <Experience />
              </Suspense>
            </Wrapper>

            <Suspense fallback={<div>Loading Projects...</div>}>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </Suspense>

            <Wrapper>
              <Suspense fallback={<div>Loading Education and Contact...</div>}>
                <Education />
                <Contact />
              </Suspense>
            </Wrapper>

            <Suspense fallback={<div>Loading Footer...</div>}>
              <Footer />
            </Suspense>

            {openModal.state && (
              <Suspense fallback={<div>Loading Project Details...</div>}>
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </Suspense>
            )}

            <ThemeSwitcher onClick={toggleTheme}>
              Switch to {isDarkTheme ? "Light" : "Dark"} Mode
            </ThemeSwitcher>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
