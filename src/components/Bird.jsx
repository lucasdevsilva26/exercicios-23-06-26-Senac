function Bird({ x, y }) {
  return (
    <div className={`absolute ${x} ${y} `}>
      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60 50 Q75 30 90 50"
          stroke="black"
          strokeWidth="3"
          fill="none"
        />

        <path
          d="M90 50 Q105 30 120 50"
          stroke="black"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
}
export default Bird;
