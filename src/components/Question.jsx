function Question({ x, y }) {
  return (
    <div className={`absolute ${x} ${y} `}>
      <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.5 9C9.5 7.34 10.84 6 12.5 6C14.16 6 15.5 7.34 15.5 9C15.5 10.1 14.91 10.84 14.02 11.45C13.01 12.15 12.5 12.72 12.5 14"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12.5" cy="18" r="1.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
export default Question;
