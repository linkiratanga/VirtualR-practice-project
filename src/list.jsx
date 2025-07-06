import './index.css';

export default function StudentList({user}){
    return (<div className="text-xl text-black"  >Hello {user}</div>)

}
function Notification(){
    const feeling = 2 > 1 ? "Good" : "Bad";
    return <p>Waoh ! I feel {feeling} Come on </p>
}

function End(){
    return <p>See you soon!</p>
}

export {Notification, End}