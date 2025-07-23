function Property({name, price, rating}){
    return (<div className="grid grid-row gap-2" >
        <p className="text-xl uppercase text-green-600" >{name}</p>
        <p>{rating}</p>
        <p>${price}</p>
    </div>)


}

export default Property



// const PropertiesList = [
//   { id: 2940, name: "Tanganyika bluebay", rating: 4.0, price: 50 },
//   { id: 1678, name: "Fab home", rating: 4.8, price: 350 },
//   { id: 9820, name: "BMCM real estate", rating: 3.1, price: 90 },
//   { id: 5579, name: "Van Beach Apartment", rating: 4.6, price: 120 },
//   { id: 8074, name: "Tanganyika bluebay", rating: 3.8, price: 180 },
//   { id: 3026, name: "Belan Hotel", rating: 5.0, price: 570 },
// ];