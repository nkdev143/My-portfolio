import { FiGithub, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <span className="navbar__logo-bracket"></span>Code With<span className="navbar__logo-accent"> Nk</span><span className="navbar__logo-bracket"></span>
          </a>
          <p>Full Stack Developer & AI Agent Engineer building thoughtful, production-ready software.</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('ai-experience')}>AI Agent Dev</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>

        <div className="footer__social">
          <h4>Connect</h4>
          <div className="footer__social-icons">
            <a href="https://github.com/nkdev143" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/nadeem-khan-a99372242?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook /></a>
            <a href="mailto:hello@yourname.dev" aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Code With Nk. All rights reserved.</span>
          <span className="footer__credit">Built with React & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
