export default function ColorList({colors}){
    const elements = [ <p>Hey</p>, <p>Hello</p>, <input type = "checkbox"/> ]; // elements as array els
    return <div>
        <p>Color List</p>
        {/* <p>{colors}</p> */}
       {elements}
       <ul>{colors.map(cur => <li className= {`text-${cur}-400`}>{cur}</li>)}</ul> {/* computing tailwind class name not working */}
       <ol>{colors.map(function (cur){
        return <li>{cur} color</li>
       })}</ol>
    </div>

}