const DownwardArrow = ({ text }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="41px" height="52px" viewBox="-0.5 -0.5 83 104">
    <rect width="100%" height="100%" fill="#ffffff" />  <g>
    <path d="M40 102 L80 62 M40 102 L0 62 M40 41 L0 1 M41 40 L81 0 M80 2 L80 62 M0 2 L0 62" fill="none" stroke="black" stroke-miterlimit="10" />
    </g>
    <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" font-size="40">
      {text}
    </text>
  </svg>
);

export default DownwardArrow;