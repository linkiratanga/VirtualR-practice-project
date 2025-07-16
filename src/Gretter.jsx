import "./index.css"

export default function Gretting(props){
    console.log(props.person);
    return <div> <p>Hey there, {props.person} </p>
    <p>{props.time}, {props.person}</p>
    </div> 
}

// when we see function({person}) --> That's props distructuring 