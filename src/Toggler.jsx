import {useState} from "react"

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const switcher = () => setIsHappy(!isHappy);
  return (
    <p onClick={switcher} className="text-4xl cursor-pointer">
      {isHappy ? "😊" : "😞"}
    </p>
  );
}
