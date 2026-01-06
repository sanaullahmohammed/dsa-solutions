function caseHandler(character) {
  switch (character.toLowerCase()) {
    case "a": return character.toUpperCase();
    case "e": return character.toUpperCase();
    case "i": return character.toUpperCase();
    case "o": return character.toUpperCase();
    case "u": return character.toUpperCase();
    default: return character.toLowerCase();
  }
}

function vowelCase(str) {
  return str.split(``).map(caseHandler).reduce((acc, character) => acc += character, ``)
}
