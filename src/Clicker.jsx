const message = function () {
  console.log("Form submit sucessfully");
};

export default function Clicker() {
  return (
    <div>
      <p onMouseOver={() => console.log("You Hover")}>Click Below</p>
      <button onClick={message} className="border  rounded p-2">
        Submit
      </button>
    </div>
  );
}
