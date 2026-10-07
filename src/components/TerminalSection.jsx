import { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Play, Trash2, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function TerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Bhavya Patel Interactive Shell v2.4 (x86_64-pc-windows)\nType "help" or click any shortcut chip below to explore.'
    }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmd) => {
    playClickSound();
    const cleanCmd = cmd.trim().toLowerCase();
    
    // Add user prompt to history
    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputText = '';

    switch (cleanCmd) {
      case 'help':
        outputText = `Available Commands:
  • help        - Display this command index
  • bio         - Background, degree & university info
  • skills      - Full technical stack & competencies
  • projects    - Overview of academic & practical projects
  • education   - Details on B.Tech & Internshala AI certification
  • contact     - Email, phone, location & GitHub
  • hire        - Request interview / hire Bhavya Patel (Confetti!)
  • clear       - Clean terminal screen`;
        break;

      case 'bio':
      case 'about':
        outputText = `[BHAVYA PATEL]
• Location: Ahmedabad, Gujarat, India
• University: Indus Institute of Technology and Engineering (2024–2028)
• Degree: B.Tech in Computer Science & Engineering
• Specialization: Web Development, Python Systems & Applied AI
• Focus: Seeking internships in software development and full-stack engineering.`;
        break;

      case 'skills':
        outputText = `[TECHNICAL SKILLS]
• Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5
• Backend & Logic: Python, C++, Java, PHP
• Database: DBMS, SQL / MySQL (Normalized relational schemas)
• AI & Tooling: AI in Web Development, Prompt Engineering, Git/GitHub, Linux
• Systems: Data Structures, Operating Systems, Computer Networks`;
        break;

      case 'projects':
        outputText = `[PROJECT PORTFOLIO]
1. Medical Management System (Python, SQL, Relational DBMS)
   - Clinical database application for patient records, doctor appointments & prescriptions.
2. Web Development with AI - Final Capstone (React, PHP, SQL, AI APIs)
   - Certified full-stack application featuring intelligent AI web assistance.
3. DevPulse AI Prompt & Code Hub (React, Modern CSS, Web APIs)
   - Developer productivity workspace for prompt templates & markdown code preview.
4. DSA Interactive Visualizer (JavaScript, Canvas API)
   - Visual algorithm simulation tool for sorting & tree structures.`;
        break;

      case 'education':
        outputText = `[ACADEMIC CREDENTIALS]
• B.Tech in CSE: Indus University, Ahmedabad (2024–2028, Currently Pursuing)
• Web Dev with AI: Internshala Trainings (Certified Aug 14, 2025 - 8 Weeks)
• Higher Secondary: St. Kabir School, Ahmedabad (2025 - 87% Distinction)`;
        break;

      case 'contact':
        outputText = `[GET IN TOUCH]
• Email: 5012.sktbhavidi@gmail.com
• Phone: +91 89884 40496
• Location: Ahmedabad, Gujarat, India
• GitHub: https://github.com/bhavyapatel1415`;
        break;

      case 'hire':
      case 'sudo hire bhavya':
      case 'sudo hire':
        playSuccessSound();
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#38bdf8', '#10b981', '#ffffff', '#f59e0b']
          });
        } catch (e) {}
        outputText = `🎉 EXCELLENT DECISION!
Bhavya Patel is ready to contribute to your engineering team with fresh dedication, strong fundamentals in React/Python/SQL, and certified AI web proficiency!
Contact: 5012.sktbhavidi@gmail.com | +91 89884 40496`;
        break;

      case '':
        outputText = '';
        break;

      default:
        outputText = `Command not recognized: "${cmd}". Type "help" to see available options.`;
    }

    if (outputText) {
      newHistory.push({ type: 'output', text: outputText });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    runCommand(inputVal);
  };

  const sampleChips = ['help', 'bio', 'skills', 'projects', 'education', 'contact', 'hire'];

  return (
    <section id="terminal" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-label">
            <Terminal size={14} />
            <span>Interactive CLI Console</span>
          </div>
          <h2 className="section-title">Developer Terminal Interface</h2>
          <p className="section-desc">
            Explore Bhavya's background via an interactive terminal. Type commands directly or tap any quick-action shortcut below.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', alignSelf: 'center', marginRight: '6px' }}>
            Quick run:
          </span>
          {sampleChips.map((c) => (
            <button
              key={c}
              onClick={() => runCommand(c)}
              className="btn btn-outline"
              style={{
                padding: '5px 12px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                gap: '5px'
              }}
            >
              <span style={{ color: '#38bdf8' }}>$</span>
              <span>{c}</span>
            </button>
          ))}
          <button
            onClick={() => runCommand('clear')}
            className="btn btn-outline"
            style={{ padding: '5px 12px', fontSize: '0.8rem', gap: '5px', color: '#ef4444' }}
            title="Clear terminal"
          >
            <Trash2 size={13} />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Window */}
        <div className="terminal-window">
          {/* Terminal Bar */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
            </div>
            <div className="terminal-title">
              bhavya@portfolio-indus: ~/resume-cli
            </div>
            <div style={{ fontSize: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span className="status-dot-pulse" style={{ width: '6px', height: '6px' }} />
              <span>ONLINE</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '10px' }}>
                {item.type === 'user' ? (
                  <div style={{ color: '#38bdf8', fontWeight: 600 }}>{item.text}</div>
                ) : item.type === 'system' ? (
                  <div style={{ color: '#94a3b8', fontStyle: 'italic', whiteSpace: 'pre-line' }}>{item.text}</div>
                ) : (
                  <pre style={{
                    color: '#e2e8f0',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    lineHeight: 1.55
                  }}>
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
              <span style={{ color: '#10b981', fontWeight: 700 }}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. skills, contact, hire)..."
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#38bdf8',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <CornerDownLeft size={16} />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>
        </div>

      </div>
    </section>
  );
}
