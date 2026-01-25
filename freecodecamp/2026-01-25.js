function scaleImage(size, scale) {
  let str = size.split("x");
  let str2 = str.map((s) => { return s*scale})
  return str2.join("x");
}
