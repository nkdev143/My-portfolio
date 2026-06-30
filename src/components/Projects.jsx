import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const FILTERS = ['All', 'Featured', 'AI', 'Web App'];

const matchesFilter = (project, filter) => {
  if (filter === 'All') return true;
  if (filter === 'Featured') return project.featured;
  if (filter === 'AI') {
    return project.tech.some((t) => /openai|langchain|n8n|pinecone/i.test(t));
  }
  if (filter === 'Web App') {
    return project.tech.some((t) => /react|next|express|node|graphql/i.test(t));
  }
  return true;
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = projects.filter((p) => matchesFilter(p, filter));

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of full stack products and AI-powered tools — built end-to-end, from architecture to deployment."
        />

        <div className="projects__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
