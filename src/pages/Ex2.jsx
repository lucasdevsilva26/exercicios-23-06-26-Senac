import { useState } from "react";
import Esc from "../components/Esc";
import Question from "../components/Question";

function Ex2() {
  const presets = {
    inputDiv: "flex flex-col gap-1 text-3xl",
    inputLabel: "font-bold cursor-pointer",
    input: "px-4 py-2 border-8 border-yellow-600 text-4xl",
  };

  const [number, setNumber] = useState("");

  return (
    <section className="flex flex-col justify-center items-center gap-2 h-full bg-linear-10 from-yellow-400 to-yellow-100 relative overflow-hidden text-white">
      <Esc></Esc>

      <div className="flex flex-col justify-center items-center w-125 p-4 border-6 border-yellow-600 rounded-2xl bg-yellow-500 z-1">
        <h1 className="mb-8 text-6xl font-bold">Par ou ìmpar:</h1>

        <div className={presets.inputDiv}>
          <label htmlFor="name" className={presets.inputLabel}>
            Número:
          </label>
          <input
            id="name"
            type="number"
            className={presets.input}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <span className={`mt-4 p-4 rounded-2xl text-4xl font-bold ${number ? "" : "hidden"} bg-yellow-600`}>
          O número {number} é {number % 2 === 0 ? "par" : "impar"}.
        </span>
      </div>

      <Question x={"left-25/100"} y={"top-25/100"}></Question>
      <Question x={"left-30/100"} y={"top-50/100"}></Question>
      <Question x={"left-10/100"} y={"top-10/100"}></Question>
      <Question x={"left-50/100"} y={"top-0/100"}></Question>
      <Question x={"left-50/100"} y={"top-75/100"}></Question>
      <Question x={"left-90/100"} y={"top-25/100"}></Question>
      <Question x={"left-75/100"} y={"top-50/100"}></Question>
      <Question x={"left-80/100"} y={"top-80/100"}></Question>
    </section>
  );
}
export default Ex2;
