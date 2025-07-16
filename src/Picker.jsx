import "./index.css"

export default function Picker({values}){
    const randomIndex = Math.floor(Math.random() * values.length) + 1;
    const randomElement = values.at(randomIndex);
    return (<div>
        <p>Parsed in values : {values}</p> {/* Why element stack together without manualy desire ? 🚫🚫🚫 */}
        <p>Picked element : {randomElement}</p>
    </div>
    )
}