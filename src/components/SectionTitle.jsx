import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ textAlign: align }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub" style={align === 'center' ? { margin: '0 auto 56px' } : undefined}>{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;
