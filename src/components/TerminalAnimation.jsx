import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './TerminalAnimation.css';

const codeLines = [
  { text: 'const developer = {', cls: '' },
  { text: "  name: 'Nadeem Khan',", cls: 'str' },
  { text: "  role: 'Full Stack & AI Agent Engineer',", cls: 'str' },
  { text: '  stack: [', cls: '' },
  { text: "    'React', 'php', 'OpenAI API',", cls: 'str' },
  { text: "    'LangChain', 'n8n'", cls: 'str' },
  { text: '  ],', cls: '' },
  { text: '  buildAgent: async (goal) => {', cls: 'fn' },
  { text: '    const plan = await llm.plan(goal);', cls: '' },
  { text: '    return execute(plan);', cls: 'kw' },
  { text: '  },', cls: '' },
  { text: '  available: true,', cls: 'bool' },
  { text: '};', cls: '' },
  { text: '', cls: '' },
  { text: 'export default developer;', cls: 'kw' },
];

const colorize = (line) => {
  // simple syntax-ish coloring by token type stored in cls, fallback to raw text
  return line.text;
};

const TerminalAnimation = () => {
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      // restart loop after a pause
      const resetTimeout = setTimeout(() => {
        setDisplayed([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 2600);
      return () => clearTimeout(resetTimeout);
    }

    const line = codeLines[currentLine];

    if (currentChar <= line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[currentLine] = { ...line, text: line.text.substring(0, currentChar) };
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, 18 + Math.random() * 24);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine]);

  return (
    <motion.div
      ref={containerRef}
      className="terminal glass"
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">developer.js</span>
      </div>
      <pre className="terminal__body">
        <code>
          {displayed.map((line, i) => (
            <div className="terminal__line" key={i}>
              <span className="terminal__line-no">{String(i + 1).padStart(2, '0')}</span>
              <span className={`terminal__code terminal__code--${line.cls}`}>{colorize(line)}</span>
            </div>
          ))}
          <span className="terminal__cursor">▍</span>
        </code>
      </pre>
    </motion.div>
  );
};

export default TerminalAnimation;
