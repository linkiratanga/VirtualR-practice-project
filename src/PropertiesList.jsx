import Property from "./Property";

const List = [
  { id: 2940, name: "Tanganyika bluebay", rating: 4.0, price: 50 },
  { id: 1678, name: "Fab home", rating: 4.8, price: 350 },
  { id: 9820, name: "BMCM real estate", rating: 3.1, price: 90 },
  { id: 5579, name: "Van Beach Apartment", rating: 4.6, price: 120 },
  { id: 8074, name: "Tanganyika bluebay", rating: 3.8, price: 180 },
  { id: 3026, name: "Belan Hotel", rating: 5.0, price: 570 },
];

export default function PropertiesList() {
  return (
    <div className="grid grid-cols-4 divide-gray-400 divide-x-2 gap-4">
      {List.map(function (cur) {
        return (
          <Property {...cur} /> // this because props name matches with keys that would be parsed in
        );
      })}
    </div>
  );
}

// Rental Properties Datasets
// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];
