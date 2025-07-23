const EventHandler = function (event) {
    event.preventDefault();
  console.log("Form submited");
//   alert("Form submited") // exercise
};

// Event object !! how prevent auto reload 
// in case of form elements, auto reload is natively default
export default function BasicForm() {
  return (
    <form onSubmit={EventHandler} action="">
      <input type="text" name="" id="" className="border" />
      <button>Send</button>
    </form>
  );
}
