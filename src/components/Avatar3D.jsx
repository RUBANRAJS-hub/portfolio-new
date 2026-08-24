import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const Avatar3D = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const projSec = document.getElementById('projects');
      if (projSec) {
        window.scrollTo({
          top: projSec.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div
      className="profile-spatial-frame cursor-pointer"
      onClick={handleClick}
    >
      {/* Outer Corner Markers */}
      <div className="frame-corner corner-tl" />
      <div className="frame-corner corner-tr" />
      <div className="frame-corner corner-bl" />
      <div className="frame-corner corner-br" />

      <div className="profile-image-mask relative overflow-hidden group">
        <img 
          src={profileImg} 
          alt="Ruban Raj.S Profile" 
          className="profile-monochrome-img"
        />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
          <Sparkles size={16} className="text-cyan-400" />
          <span>Click to Explore Projects</span>
        </div>
      </div>

      {/* Spatial Overlay Badge */}
      <div className="spatial-badge flex items-center gap-2">
        <span className="badge-line" />
        <span className="badge-text flex items-center gap-1">
          <ShieldCheck size={14} className="text-emerald-400 inline" /> MCA // MADURAI KAMARAJ UNIV
        </span>
      </div>
    </div>
  );
};

export default Avatar3D;
