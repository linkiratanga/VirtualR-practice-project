import { useState } from "react";

export default function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const counter = () => setCount(count + 1); // if counter is not envoked on an event handler it doesn't work
  const switcher = () => setIsHappy(!isHappy); // The same as switcher, that include function
  return (
    <div className="">
      <p onClick={switcher} className="text-4xl cursor-pointer">
        {isHappy ? "😊" : "😞"}
      </p>
      <div className="flex text-3xl">
        <p>click {count}</p>
        <button onClick={counter} className="p-2 rounded-xl border-2">
          +
        </button>
      </div>
    </div>
  );
}
