import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skillGroups } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A versatile technology stack spanning frontend backend AI integration and modern infrastructure to deliver secure  scalable and high-performance applications."
        />

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skills__card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: gi * 0.08 }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__items">
                {group.items.map((item, i) => (
                  <div className="skills__item" key={item.name}>
                    <div className="skills__item-head">
                      <span>{item.name}</span>
                      <span className="skills__item-level">{item.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <motion.div
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
