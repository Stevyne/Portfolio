
export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 200"
      className={className} // Ajustez la taille selon vos besoins
    >
      <defs>
        <filter id="g">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge>
            <feMergeNode in="b"/>
            <feMergeNode in="b"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <pattern id="s" x="0" y="0" width="1" height="3" patternUnits="userSpaceOnUse">
          <rect width="1" height="1" fill="#00ff41" opacity="0.03"/>
        </pattern>
      </defs>
      <rect width="500" height="200" fill="#050805"/>
      <rect width="500" height="200" fill="url(#s)"/>
      <g fontFamily="monospace" fontSize="6" fill="#00ff41" opacity="0.06">
        <text x="10" y="25">01001101</text>
        <text x="80" y="55">00101010</text>
        <text x="150" y="40">11010011</text>
        <text x="220" y="60">01101100</text>
        <text x="290" y="30">10100101</text>
        <text x="360" y="50">01001110</text>
        <text x="430" y="65">00110101</text>
      </g>
      <g fontFamily="monospace" fontSize="5" fill="#00ff41" opacity="0.04">
        <text x="20" y="170">01001001</text>
        <text x="120" y="185">10101010</text>
        <text x="240" y="175">01101111</text>
        <text x="380" y="190">10010010</text>
      </g>
      <g transform="translate(85,75)">
        <polygon points="0,-48 42,-24 42,24 0,48 -42,24 -42,-24" fill="#050805" stroke="#00ff41" strokeWidth="2.5" filter="url(#g)"/>
        <polygon points="0,-36 31,-18 31,18 0,36 -31,18 -31,-18" fill="none" stroke="#00ff41" strokeWidth="0.8" opacity="0.3"/>
        <text x="0" y="13" fontFamily="monospace" fontSize="38" fontWeight="bold" fill="#00ff41" textAnchor="middle" filter="url(#g)">S</text>
      </g>
      <text x="145" y="78" fontFamily="monospace" fontSize="50" fontWeight="bold" fill="#00ff41" filter="url(#g)" letterSpacing="3">STEVY</text>
      <text x="145" y="112" fontFamily="monospace" fontSize="12" fill="#00cc33" letterSpacing="5">INFORMATIQUE</text>
      <text x="145" y="150" fontFamily="monospace" fontSize="8" fill="#00ff41" opacity="0.2">___  _   _  ___   _  __</text>
      <circle cx="40" cy="165" r="2" fill="#00ff41" opacity="0.15"/>
      <circle cx="60" cy="175" r="1.5" fill="#00ff41" opacity="0.1"/>
      <circle cx="75" cy="168" r="1" fill="#00ff41" opacity="0.12"/>
      <circle cx="50" cy="180" r="0.8" fill="#00ff41" opacity="0.08"/>
    </svg>
  );
}