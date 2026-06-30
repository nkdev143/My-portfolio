import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiFacebook, FiSend } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import './Contact.css';

const initialState = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated submit — wire this up to your form backend / API route.
    setTimeout(() => {
      setStatus('sent');
      setForm(initialState);
      setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Contact"
            title="Let's build something great together"
            subtitle="Whether you're planning a new project building an AI agent or looking for a skilled developer let's connect and turn your ideas into reality"
          />

          <div className="contact__info">
            <a className="contact__info-item" href="mailto:hello@yourname.dev">
              <span><FiMail /></span> Nkswabi6677@gmail.com
            </a>
            <div className="contact__info-item">
              <span><FiPhone /></span> +923150523361
            </div>
            <div className="contact__info-item">
              <span><FiMapPin /></span> Remote · Available worldwide
            </div>
          </div>

          <div className="contact__social">
            <a href="https://github.com/nkdev143" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/nadeem-khan-a99372242?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook /></a>
          </div>
        </motion.div>

        <motion.form
          className="contact__form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contact__field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Doe" />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : (<>Send Message <FiSend size={15} /></>)}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
