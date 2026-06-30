import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className={`project-card glass ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {project.featured && <span className="project-card__featured-badge">Featured</span>}
      <div className="project-card__thumb">
        <span className="project-card__thumb-glyph">{'</>'}</span>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="project-card__links">
          <a href="https://github.com/nkdev143" target="_blank" rel="noopener noreferrer" className="btn btn-outline project-card__btn">
            <FiGithub size={15} /> Code
          </a>
          <a href="https://github.com/nkdev143" target="_blank" rel="noopener noreferrer" className="btn btn-primary project-card__btn">
            <FiExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
