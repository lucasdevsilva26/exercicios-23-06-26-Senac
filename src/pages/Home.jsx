import { useNavigate } from "react-router";
import { challenges } from "../main";

function Home() {
  const navigate = useNavigate();

  const colors = ["bg-indigo-300", "bg-yellow-300", "bg-red-300"];

  return (
    <section className="flex flex-col justify-center items-center gap-2 h-full bg-linear-0 from-gray-500 to-white">
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-bold">Exercícios</h1>
        <h2 className="mb-4 text-3xl font-bold">23/06/26</h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 w-max px-4">
        {challenges.map((challenge, i) => {
          console.log(i);
          return (
            <button
              key={challenge.url}
              className={`w-full px-4 py-2 ${colors[i]} border-4 rounded-2xl text-2xl font-bold cursor-pointer hover:scale-[98%] duration-200`}
              onClick={() => navigate(challenge.url)}
            >
              {challenge.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
export default Home;
