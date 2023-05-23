const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
// -> ['Bright Lights Elementary', 'Moose Mountain Community Centre']

// In order for a station to be deemed appropriate,
// it must have a capacity of at least 20, and be a school or community centre.

function chooseStations(stations) {
  const goodStations = [];
  for (let station of stations) {
    let [name, capacity, type] = station;
    if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
      goodStations.push(name);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));