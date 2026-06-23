import { useEffect } from "react";
import { useNavigate } from "react-router";

function Esc() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <div
      className="flex justify-center items-center w-10 h-10 m-5 bg-red-300 rounded-full border-4 border-red-500 fixed left-0 top-0 text-2xl  text-red-700 font-bold hover:scale-95 duration-200 cursor-pointer"
      onClick={() => navigate("/")}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          navigate("/");
        }
      }}
    >
      X
    </div>
  );
}
export default Esc;
