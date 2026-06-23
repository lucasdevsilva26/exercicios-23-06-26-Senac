import { useState } from "react";
import Esc from "../components/Esc";
import Message from "../components/Message";

function Ex1() {
  const presets = {
    inputDiv: "flex flex-col gap-1 text-3xl",
    inputLabel: "font-bold cursor-pointer",
    input: "px-4 py-2 border-8 border-indigo-500 text-4xl",
  };

  const [name, setName] = useState("");
  
  return (
    <section className="flex flex-col justify-center items-center gap-2 h-full bg-linear-10 from-purple-900 to-blue-400 relative overflow-hidden text-white">
      <Esc></Esc>

      <div className="flex flex-col justify-center items-center w-150 p-4 border-6 border-indigo-500 rounded-2xl bg-indigo-400 z-1">
        <h1 className="mb-8 text-5xl font-bold">Programa: Olá você!</h1>

        <div className={presets.inputDiv}>
          <label htmlFor="name" className={presets.inputLabel}>
            Nome
          </label>
          <input
            id="name"
            type="text"
            className={presets.input}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <span
          className={`mt-2 text-5xl font-bold ${name ? "" : "hidden"}`}
        >
          Programa: Olá {name}
        </span>
      </div>
      
      <Message x={"left-25/100"} y={"top-25/100"}></Message>
      <Message x={"left-30/100"} y={"top-50/100"}></Message>
      <Message x={"left-10/100"} y={"top-10/100"}></Message>
      <Message x={"left-50/100"} y={"top-0/100"}></Message>
      <Message x={"left-50/100"} y={"top-75/100"}></Message>
      <Message x={"left-90/100"} y={"top-25/100"}></Message>
      <Message x={"left-75/100"} y={"top-50/100"}></Message>
      <Message x={"left-80/100"} y={"top-80/100"}></Message>
    </section>
  );
}
export default Ex1;
