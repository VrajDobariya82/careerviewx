import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InternalFooter() {
  const navigate = useNavigate();

  return (
    <footer className="mt-20 py-12 border-t border-slate-800 text-center">
      <p className="text-slate-500 text-sm">
        © 2026 CareerViewX Career Intelligence. Empowering the next generation of leaders.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <button
          onClick={() => navigate('/settings')}
          className="text-xs text-slate-500 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer"
        >
          Privacy Framework
        </button>
        <button
          onClick={() => navigate('/settings')}
          className="text-xs text-slate-500 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer"
        >
          Terms of Analysis
        </button>
        <button
          onClick={() => navigate('/mentors')}
          className="text-xs text-slate-500 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer"
        >
          Support
        </button>
      </div>
    </footer>
  );
}
