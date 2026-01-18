const priceChart = {
  "shirt": 34.25,
  "jeans": 48.50,
  "shoes": 75.00,
  "hat": 19.95,
  "socks": 15.00,
  "jacket": 109.95,
}

function getsFreeShipping(cart, minimum) {

  return cart.map((item) => priceChart[item]).reduce((acc, price) => acc += price, 0) > minimum;
}
