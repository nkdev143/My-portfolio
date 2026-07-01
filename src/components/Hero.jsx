import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { useTypingEffect } from '../hooks/useTypingEffect';
import TerminalAnimation from './TerminalAnimation';
import './Hero.css';

const titles = [
  'Full Stack Developer',
  'AI Agent Engineer',
  'OpenAI API Integrator',
  'n8n Automation Builder',
  'LangChain Developer',
];

const Hero = () => {
  const typed = useTypingEffect(titles);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="grid-bg" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Hello, I'm available for work</span>

          <h1 className="hero__name">
            Hi, I'm <span className="hero__name-accent">Nadeem Khan</span>
          </h1>

          <h2 className="hero__title">
            <span className="hero__title-typed">{typed}</span>
            <span className="hero__title-cursor">|</span>
          </h2>

          <p className="hero__desc">
           I create high-performance web applications, AI agents chatbots
            and automation solutions that help businesses work smarter.
             Every project is built with scalabilit clean architecture 
           and a strong focus on performance usability and user experience.
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Hire Me
            </button>
            <a className="btn btn-outline" href="/nkdevcv.pdf" download>
              <FiDownload size={16} /> Download CV
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>25+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>10+</strong>
              <span>AI Agents Shipped</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="hero__avatar-ring">
          <img src="/nk.png" alt="Profile portrait" />
          </div>


          <div className="hero__terminal-wrap">
            <TerminalAnimation />
          </div>
        </motion.div>
      </div>
      

      <motion.button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  );
};

export default Hero;
