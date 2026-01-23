function isVowel(c) {
  switch(c.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function isBalanced(s) {
  let numOfLeftHalfVowels = 0, numOfRightHalfVowels = 0;

  const characters = s.split(``);

  let i = 0, j = characters.length - 1;

  while(i < j) {
    if (isVowel(characters[i++])) {
      numOfLeftHalfVowels++;
    }
    if (isVowel(characters[j--])) {
      numOfRightHalfVowels++;
    }
  }

  return numOfLeftHalfVowels === numOfRightHalfVowels;
}
