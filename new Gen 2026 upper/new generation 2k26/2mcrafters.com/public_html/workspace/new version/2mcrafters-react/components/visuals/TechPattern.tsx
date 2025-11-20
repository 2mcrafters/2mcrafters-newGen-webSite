"use client";

import styles from './TechPattern.module.css';

export function TechPattern() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-20">
      {/* Grid Pattern */}
      <div className={styles.gridPattern} />

      {/* Diagonal Lines */}
      <div className={styles.diagonalLines} />

      {/* Tech Icons Pattern - Top */}
      <div className="absolute left-[10%] top-[15%] text-cyan-400/10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="absolute right-[15%] top-[25%] text-blue-300/10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      </div>

      <div className="absolute left-[20%] top-[40%] text-cyan-500/10">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {/* Middle Section Icons */}
      <div className="absolute right-[8%] top-[50%] text-blue-400/10">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      </div>

      <div className="absolute left-[12%] top-[65%] text-cyan-300/10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>

      {/* Bottom Section Icons */}
      <div className="absolute right-[18%] top-[75%] text-blue-300/10">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>

      <div className="absolute left-[25%] top-[85%] text-cyan-400/10">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute right-[30%] top-[20%] h-24 w-24 rotate-12 rounded-lg border border-cyan-400/10" />
      <div className="absolute left-[35%] top-[55%] h-32 w-32 -rotate-6 rounded-full border border-blue-300/10" />
      <div className="absolute right-[25%] top-[82%] h-20 w-20 rotate-45 border border-cyan-500/10" />

      {/* Circuit-like Connections */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
          </linearGradient>
        </defs>
        <path
          d="M 100 150 Q 250 200 400 150 T 700 150"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
        />
        <circle cx="100" cy="150" r="3" fill="rgba(56, 189, 248, 0.2)" />
        <circle cx="400" cy="150" r="3" fill="rgba(56, 189, 248, 0.2)" />
        
        <path
          d="M 1200 400 Q 1050 450 900 400 T 600 400"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
        />
        <circle cx="1200" cy="400" r="3" fill="rgba(59, 130, 246, 0.2)" />
        <circle cx="900" cy="400" r="3" fill="rgba(59, 130, 246, 0.2)" />
      </svg>

      {/* Dot Matrix Pattern */}
      <div className="absolute right-[5%] top-[35%]">
        {Array.from({ length: 5 }).map((_, row) => (
          <div key={row} className="flex gap-3">
            {Array.from({ length: 5 }).map((_, col) => (
              <div
                key={col}
                className={`h-1 w-1 rounded-full bg-cyan-400/20 ${col % 2 === 0 ? 'opacity-30' : 'opacity-50'}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute left-[5%] top-[78%]">
        {Array.from({ length: 4 }).map((_, row) => (
          <div key={row} className="flex gap-3">
            {Array.from({ length: 6 }).map((_, col) => (
              <div
                key={col}
                className={`h-1 w-1 rounded-full bg-blue-300/20 ${row % 2 === 0 ? 'opacity-40' : 'opacity-60'}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Radial Glow Effects */}
      <div className="absolute left-[15%] top-[30%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_70%)] blur-3xl" />
      <div className="absolute right-[10%] top-[60%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_70%)] blur-3xl" />
    </div>
  );
}
