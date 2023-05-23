const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

function finalPosition(moves) {
  let x = 0;
  let y = 0;

  for (let move of moves) {
    switch (move) {
    case 'north':
      y++;
      break;
    case 'south':
      y--;
      break;
    case 'east':
      x++;
      break;
    case 'west':
      x--;
      break;
    }
  }

  return [x, y];
}