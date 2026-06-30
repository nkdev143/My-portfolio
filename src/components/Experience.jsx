import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { experience } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Experienced in building and deploying production-quality software leading end-to-end delivery across focused engineering teams."
        />

        <div className="timeline">
          {experience.map((item, i) => (
            <motion.div
              className="timeline__item"
              key={item.role + item.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="timeline__marker">
                <span className="timeline__dot" />
                {i !== experience.length - 1 && <span className="timeline__line" />}
              </div>
              <div className="timeline__card glass">
                <div className="timeline__head">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__company">{item.company}</p>
                <ul className="timeline__points">
                  {item.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
