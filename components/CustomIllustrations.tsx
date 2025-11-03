import { motion } from 'motion/react';

export function RocketIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rocket Body */}
      <motion.path
        d="M200 50 L240 200 L200 280 L160 200 Z"
        fill="#FACC15"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      
      {/* Rocket Window */}
      <motion.circle
        cx="200"
        cy="120"
        r="20"
        fill="#000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      
      {/* Left Fin */}
      <motion.path
        d="M160 200 L130 260 L160 240 Z"
        fill="#000"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {/* Right Fin */}
      <motion.path
        d="M240 200 L270 260 L240 240 Z"
        fill="#000"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {/* Flames */}
      <motion.path
        d="M180 280 L190 320 L200 340 L210 320 L220 280"
        fill="#FF4500"
        initial={{ scaleY: 0, originY: '0%' }}
        animate={{ scaleY: [0, 1, 0.8, 1] }}
        transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 0.3 }}
      />
      
      {/* Stars */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={80 + i * 40}
          cy={60 + (i % 3) * 80}
          r="2"
          fill="#FACC15"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}
    </svg>
  );
}

export function OrbitIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Planet */}
      <motion.circle
        cx="200"
        cy="200"
        r="40"
        fill="#FACC15"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      />
      
      {/* Orbit Rings */}
      {[80, 120, 160].map((radius, i) => (
        <motion.circle
          key={i}
          cx="200"
          cy="200"
          r={radius}
          stroke="#FACC15"
          strokeWidth="1"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.3,
            rotate: 360
          }}
          transition={{ 
            pathLength: { duration: 2, delay: i * 0.3 },
            opacity: { duration: 1, delay: i * 0.3 },
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }
          }}
          style={{ originX: '200px', originY: '200px' }}
        />
      ))}
      
      {/* Orbiting Satellites */}
      {[0, 120, 240].map((angle, i) => (
        <motion.g key={i}>
          <motion.circle
            cx="200"
            cy="200"
            r="6"
            fill="#000"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotate: 360
            }}
            transition={{ 
              opacity: { duration: 0.5, delay: 1 + i * 0.2 },
              rotate: { 
                duration: 15, 
                repeat: Infinity, 
                ease: 'linear',
                delay: i * (15 / 3)
              }
            }}
            style={{ 
              originX: '200px', 
              originY: '200px',
              offsetDistance: '120px'
            }}
            transform={`rotate(${angle} 200 200) translate(120 0)`}
          />
        </motion.g>
      ))}
    </svg>
  );
}

export function ConstellationIllustration({ className = '' }: { className?: string }) {
  const points = [
    { x: 100, y: 100 },
    { x: 180, y: 80 },
    { x: 250, y: 120 },
    { x: 300, y: 180 },
    { x: 280, y: 260 },
    { x: 200, y: 300 },
    { x: 120, y: 280 },
    { x: 80, y: 200 },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connection Lines */}
      {points.map((point, i) => {
        const nextPoint = points[(i + 1) % points.length];
        return (
          <motion.line
            key={i}
            x1={point.x}
            y1={point.y}
            x2={nextPoint.x}
            y2={nextPoint.y}
            stroke="#FACC15"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        );
      })}
      
      {/* Star Points */}
      {points.map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="6"
          fill="#FACC15"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: 1
          }}
          transition={{ 
            scale: {
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1
            },
            opacity: { duration: 0.5, delay: i * 0.1 }
          }}
        />
      ))}
    </svg>
  );
}

export function LaunchIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Launch Platform */}
      <motion.rect
        x="150"
        y="300"
        width="100"
        height="20"
        fill="#000"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Rocket */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [-200, 0] }}
        transition={{ duration: 2, delay: 0.5, type: 'spring' }}
      >
        <path
          d="M200 100 L220 200 L200 240 L180 200 Z"
          fill="#FACC15"
        />
        <circle cx="200" cy="150" r="10" fill="#000" />
        <path d="M180 200 L160 240 L180 220 Z" fill="#000" />
        <path d="M220 200 L240 240 L220 220 Z" fill="#000" />
      </motion.g>
      
      {/* Smoke Clouds */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={i}
          cx={170 + i * 15}
          cy={310}
          r={10 + i * 3}
          fill="#666"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0, 1.5, 2],
            y: [0, -30]
          }}
          transition={{ 
            duration: 2,
            delay: 1 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        />
      ))}
    </svg>
  );
}
