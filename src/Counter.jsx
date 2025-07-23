import { useState } from "react";

export default function Counter() {
  // useState returns an array made of 2 elements. [Piece of state itself, a function that changes that state]
  const [num, setNum] = useState(0);
  const numAction = function () {
    setNum(num + 1);
  };
  return (
    <div>
      <p>The counter is on {num}</p>
      <button onClick={numAction} className="border p-2 hover:bg-slate-300">
        Run
      </button>
    </div>
  );
}
