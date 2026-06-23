function MarketCar({ x, y }) {
  return (
    <div className={`absolute ${x} ${y} `}>
      <svg
        width="180"
        height="100"
        viewBox="0 0 220 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="20" y1="20" x2="50" y2="20" />

          <polyline points="50,20 170,20 155,80 70,80 50,20" />

          <line x1="80" y1="20" x2="80" y2="80" />
          <line x1="110" y1="20" x2="110" y2="80" />
          <line x1="140" y1="20" x2="140" y2="80" />

          <line x1="70" y1="80" x2="165" y2="80" />

          <line x1="80" y1="80" x2="65" y2="105" />
          <line x1="150" y1="80" x2="165" y2="105" />

          <circle cx="60" cy="115" r="12" />
          <circle cx="170" cy="115" r="12" />
        </g>
      </svg>
    </div>
  );
}
export default MarketCar;
