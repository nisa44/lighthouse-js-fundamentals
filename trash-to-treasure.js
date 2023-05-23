smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
// -> { waste: 4, recycling: 3, compost: 5 }

function smartGarbage(trash, bins) {
  bins[trash]++;
  return bins;
}