function Message({ x, y }) {
  return (
    <div className={`absolute ${x} ${y} `}>
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H13L8 20V16H6C4.9 16 4 15.1 4 14V6Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="10" r="1" fill="#FFFFFF" />
        <circle cx="12" cy="10" r="1" fill="#FFFFFF" />
        <circle cx="15" cy="10" r="1" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
export default Message;
