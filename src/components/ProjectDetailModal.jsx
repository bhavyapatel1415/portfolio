import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClickSound } from '../utils/audio';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '32px' }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              fontSize: '0.78rem',
              color: '#38bdf8',
              fontFamily: 'var(--font-mono)',
              marginBottom: '10px'
            }}>
              {project.category}
            </div>
            <h3 style={{ fontSize: '1.65rem', color: '#ffffff', fontWeight: 700 }}>
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Description */}
        <p style={{ fontSize: '0.96rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '24px' }}>
          {project.detailedDescription || project.description}
        </p>

        {/* Key Architectural Highlights */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={16} color="#38bdf8" />
            <span>Key Engineering Highlights</span>
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
            {project.features?.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  color: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Used */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} color="#a855f7" />
            <span>Technologies & Libraries</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <a
            href="https://github.com/bhavyapatel1415"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '0.88rem', padding: '10px 20px' }}
          >
            <GithubIcon size={16} />
            <span>Explore on GitHub</span>
            <ExternalLink size={14} />
          </a>

          <button
            className="btn btn-outline"
            onClick={onClose}
            style={{ fontSize: '0.88rem', padding: '10px 20px' }}
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
