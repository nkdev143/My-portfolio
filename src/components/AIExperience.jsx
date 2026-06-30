import { motion } from 'framer-motion';
import {
  FiCpu, FiZap, FiGitMerge, FiMessageSquare,
  FiTerminal, FiSliders, FiShare2, FiLayers,
} from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { aiExperience } from '../data/aiExperience';
import './AIExperience.css';

const icons = [FiCpu, FiZap, FiGitMerge, FiTerminal, FiSliders, FiMessageSquare, FiShare2, FiLayers];

const AIExperience = () => {
  return (
    <section id="ai-experience" className="section ai-experience">
      <div className="ai-experience__glow" />
      <div className="container">
        <SectionTitle
          eyebrow="AI Agent Developer Experience"
          title="Building the AI layer on top of great software"
          subtitle="Beyond traditional full stack work, I specialize in designing autonomous agents and intelligent automations that plug directly into real products."
        />

        <div className="ai-grid">
          {aiExperience.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                className="ai-card glass"
                key={item.title}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <span className="ai-card__icon"><Icon size={20} /></span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIExperience;
