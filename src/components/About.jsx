import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiZap } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import profile from "../asset/dev.jpeg";
import './About.css';

const highlights = [
  { icon: <FiCode />, title: 'Clean Architecture', desc: 'I write maintainable, well-tested code organized around clear boundaries and reusable components.' },
  { icon: <FiCpu />, title: 'AI-Native Thinking', desc: 'I treat LLMs and agents as first-class building blocks, not bolt-ons, when designing products.' },
  { icon: <FiZap />, title: 'Performance Obsessed', desc: 'From bundle size to database indexes, I sweat the details that make apps feel instant.' },
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about__card glass">
            <img
              src="src/asset/dev.jpeg"
              alt="Developer working illustration"
            />
          </div>
          <div className="about__badge">
            <strong>3+</strong>
            <span>years building products</span>
          </div>
        </motion.div>

        <div className="about__content">
          <SectionTitle
            eyebrow="About Me"
            title="I build products end-to-end — interface to infrastructure to intelligence."
          />
          <p className="about__paragraph">
With 3+ years of experience in full-stack development, I build fast 
scalable and user-focused web applications from concept to deployment.
 In recent years I've expanded my expertise into Artificial Intelligence 
 creating AI agents integrating LLMs and designing workflow automations with
  LangChain and n8n. I enjoy transforming complex ideas into reliable
   production-ready
 solutions that improve efficiency and deliver real business value.      </p>
          <p className="about__paragraph">
            I care about the details that make software feel professional: thoughtful
            state management accessible interfaces fast load times and code that the
            next developer often future-me can actually understand.
          </p>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="about__highlight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="about__highlight-icon">{h.icon}</span>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
