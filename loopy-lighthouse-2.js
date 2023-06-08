'use strict'
//@ts-check

function loopyLighthouse(range, multiples, words) {
  const [start, end] = range
  const [m1, m2] = multiples
  const [word1, word2] = words

  for (let i = start; i <= end; i++) {
    if (i % m1 === 0 && i % m2 === 0) {
      console.log(word1 + word2)
    } else if (i % m1 === 0) {
      console.log(word1)
    } else if (i % m2 === 0) {
      console.log(word2)
    } else {
      console.log(i)
    }
  }  
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


