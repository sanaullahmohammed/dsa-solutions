function toConsonantCase(str) {
  return str.split(``).map((char) => {
    switch(char.toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return char.toLowerCase()
      case "-":
        return "_"
      default:
        return char.toUpperCase()
    }
  }).join(``);
}
