const StarAvatar = ({ isTalking }) => {
    return (
      <svg width="80" height="80" viewBox="0 0 80 80">
        {/* Glowing background */}
        <circle cx="40" cy="40" r="38" fill="url(#glow)" opacity="0.3" />
        
        {/* Main star */}
        <path
          d="M40 5 L49 28 L73 28 L52 43 L61 66 L40 53 L19 66 L28 43 L7 28 L31 28 Z"
          fill="url(#star-gradient)"
          stroke="#FFD700"
          strokeWidth="2"
        >
          {isTalking && (
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1; 1.05; 1"
              dur="1s"
              repeatCount="indefinite"
            />
          )}
        </path>
        
        {/* Eyes */}
        <circle cx="32" cy="30" r="3" fill="#000">
          <animate attributeName="cy" values="30;28;30" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="48" cy="30" r="3" fill="#000">
          <animate attributeName="cy" values="30;32;30" dur="2.3s" repeatCount="indefinite" />
        </circle>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEA00" />
            <stop offset="100%" stopColor="#FF7B00" />
          </linearGradient>
          <radialGradient id="glow" cx="40" cy="40" r="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  };