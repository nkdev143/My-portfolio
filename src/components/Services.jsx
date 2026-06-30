import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiShare2, FiLink, FiFeather, FiTrendingUp } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { services } from '../data/services';
import './Services.css';

const iconMap = {
  code: FiCode,
  bot: FiCpu,
  workflow: FiShare2,
  api: FiLink,
  design: FiFeather,
  rocket: FiTrendingUp,
};

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="How I can help"
          subtitle="From a single feature to a full product build — including the AI workflows that set it apart."
        />

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                className="service-card glass"
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <span className="service-card__icon"><Icon size={22} /></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
