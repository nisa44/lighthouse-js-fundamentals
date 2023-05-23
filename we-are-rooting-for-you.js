/*


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))

*/



function judgeVegetable(vegetables, metric) {
  let highestMetric = vegetables[0][metric];
  let submitter = vegetables[0]['submitter'];

  for (let vegetable of vegetables) {
    if (highestMetric < vegetable[metric]) {
      highestMetric = vegetable[metric];
      submitter = vegetable.submitter;
    }
  }

  return submitter;
}