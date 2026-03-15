"use client";

import { motion } from "framer-motion";

// Animated Target/Crosshair - More visible version
export function AnimatedTarget({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Outer rings with better visibility */}
        {[80, 60, 40, 20].map((r, i) => (
          <motion.circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="#ff4d00"
            strokeWidth="2"
            opacity={0.3 + i * 0.2}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 + i * 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
        
        {/* Crosshair lines - thicker */}
        <motion.line
          x1="100" y1="5" x2="100" y2="195"
          stroke="#ff4d00"
          strokeWidth="2"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.line
          x1="5" y1="100" x2="195" y2="100"
          stroke="#ff4d00"
          strokeWidth="2"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Center dot - larger */}
        <motion.circle
          cx="100"
          cy="100"
          r="8"
          fill="#ff4d00"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
        
        {/* Rotating markers */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x="98"
              y="15"
              width="4"
              height="12"
              fill="#ff4d00"
              opacity="0.7"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}

// Bullet Trajectory Animation - More visible
export function BulletTrajectory({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Trajectory line - more visible */}
        <motion.line
          x1="0"
          y1="30"
          x2="400"
          y2="30"
          stroke="#ff4d00"
          strokeWidth="2"
          strokeDasharray="8,4"
          opacity="0.5"
        />
        
        {/* Moving bullet */}
        <motion.g
          initial={{ x: 0 }}
          animate={{ x: 400 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <circle r="6" cx="0" cy="30" fill="#ff4d00" />
          {/* Bullet trail */}
          <rect x="-30" y="28" width="30" height="4" fill="url(#bulletTrail)" />
        </motion.g>
        
        {/* Impact effects at end */}
        <motion.circle
          cx="380"
          cy="30"
          r="15"
          fill="none"
          stroke="#ff4d00"
          strokeWidth="2"
          opacity="0.5"
          animate={{ scale: [0.5, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        <defs>
          <linearGradient id="bulletTrail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4d00" stopOpacity="0" />
            <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Tactical HUD Element - Improved visibility
export function TacticalHUD({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative p-1">
      {/* Corner brackets - more visible */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#ff4d00]" />
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#ff4d00]" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#ff4d00]" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#ff4d00]" />
      
      {/* Label */}
      <div className="absolute -top-8 left-4 px-2 py-1 bg-[#ff4d00]/20 text-xs text-[#ff4d00] uppercase tracking-widest font-bold">
        {label}
      </div>
      
      {/* Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

// Radar/Scanner Animation - Better visibility
export function RadarScanner({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Circles */}
        {[30, 60, 90].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#ff4d00" strokeWidth="1.5" opacity="0.4" />
        ))}
        
        {/* Cross lines */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="#ff4d00" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="#ff4d00" strokeWidth="1" opacity="0.3" />
        
        {/* Rotating scanner line */}
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="15"
          stroke="#ff4d00"
          strokeWidth="3"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        />
        
        {/* Scanner sweep gradient */}
        <motion.path
          d="M 100 100 L 100 15 A 85 85 0 0 1 175 70 Z"
          fill="#ff4d00"
          opacity="0.15"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        />
        
        {/* Center dot */}
        <circle cx="100" cy="100" r="5" fill="#ff4d00" />
        
        {/* Blips */}
        <motion.circle
          cx="130"
          cy="60"
          r="5"
          fill="#ff4d00"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="70"
          cy="140"
          r="4"
          fill="#ff4d00"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

// Shooting Range Lanes Visualization - Improved
export function ShootingLanes({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 500 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Background lanes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            {/* Lane */}
            <rect
              x={i * 100 + 10}
              y="10"
              width="80"
              height="100"
              fill="none"
              stroke="#ff4d00"
              strokeWidth="1"
              opacity="0.2"
            />
            
            {/* Lane number */}
            <text
              x={i * 100 + 50}
              y="25"
              fill="#ff4d00"
              fontSize="12"
              textAnchor="middle"
              opacity="0.6"
            >
              {i + 1}
            </text>
            
            {/* Target at end */}
            <motion.g
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              <circle cx={i * 100 + 50} cy="90" r="20" fill="none" stroke="#ff4d00" strokeWidth="2" opacity="0.6" />
              <circle cx={i * 100 + 50} cy="90" r="12" fill="none" stroke="#ff4d00" strokeWidth="1.5" opacity="0.4" />
              <circle cx={i * 100 + 50} cy="90" r="4" fill="#ff4d00" />
            </motion.g>
            
            {/* Muzzle flash */}
            <motion.circle
              cx={i * 100 + 50}
              cy="35"
              r="8"
              fill="#ff4d00"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: 0.2, delay: i * 0.8 + 1, repeat: Infinity, repeatDelay: 4 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

// Recoil Pattern Visualization - Improved
export function RecoilPattern({ className = "" }: { className?: string }) {
  const points = [
    { x: 50, y: 85 },
    { x: 48, y: 70 },
    { x: 53, y: 55 },
    { x: 45, y: 40 },
    { x: 55, y: 25 },
    { x: 50, y: 15 },
  ];
  
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Grid background */}
        <rect x="15" y="5" width="70" height="90" fill="none" stroke="#ff4d00" strokeWidth="1.5" opacity="0.3" />
        
        {/* Grid lines */}
        <line x1="50" y1="5" x2="50" y2="95" stroke="#ff4d00" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="#ff4d00" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" />
        
        {/* Pattern path */}
        <motion.path
          d={`M ${points.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
          fill="none"
          stroke="#ff4d00"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
        
        {/* Impact points */}
        {points.map((point, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#ff4d00"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill="none"
              stroke="#ff4d00"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: [0.5, 0] }}
              transition={{ delay: i * 0.2 + 0.1, duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// Gun silhouette visualization
export function GunSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 60" className="w-full h-full">
        {/* Simplified gun shape */}
        <motion.path
          d="M10 35 L60 35 L60 25 L100 25 L100 35 L110 35 L110 40 L100 40 L100 45 L70 45 L65 55 L55 55 L50 45 L10 45 Z"
          fill="none"
          stroke="#ff4d00"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Muzzle flash */}
        <motion.g
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        >
          <polygon points="110,37 130,30 125,37 130,44" fill="#ff4d00" opacity="0.8" />
        </motion.g>
        
        {/* Ejected casing */}
        <motion.rect
          x="70"
          y="20"
          width="4"
          height="8"
          fill="#ff4d00"
          initial={{ y: 20, x: 70, rotate: 0, opacity: 0 }}
          animate={{ y: -10, x: 85, rotate: 45, opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.3 }}
        />
      </svg>
    </div>
  );
}
