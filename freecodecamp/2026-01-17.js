const alphaIndexMap = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6,
  'H': 7,
}

const numOfKeysOfAlphaIndexMap = Object.keys(alphaIndexMap).length;

const numIndexMap = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
}

const numOfKeysOfNumIndexMap = Object.keys(numIndexMap).length;

const dy = [ 2, 2, 1, -1, -2, -2,  1, -1];
const dx = [-1, 1, 2,  2, -1,  1, -2, -2];

const numOfMoves = 8;

function knightMoves(position) {
  const [alpha, num] = position.split(``);
  
  const alphaVal = alphaIndexMap[alpha];
  const numVal = numIndexMap[num];

  let validNumOfMoves = 0;

  for (let i = 0; i < numOfMoves; i++) {
    const newRow = numVal + dy[i];
    const newCol = alphaVal + dx[i];

    if (
      (newRow >= 0 && newRow < numOfKeysOfNumIndexMap) &&
      (newCol >= 0 && newCol < numOfKeysOfAlphaIndexMap) 
      ) {
        validNumOfMoves++;
      }
  }

  return validNumOfMoves;
}
