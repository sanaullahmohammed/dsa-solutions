function isSortedIncreasing(arr, n) {
  let i = 0;

  while(i < (n - 1)) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
    i++
  }

  return true;
}

function isSortedDecreasing(arr, n) {
  let i = 0;

  while(i < (n - 1)) {
    if (arr[i] < arr[i+1]) {
      return false;
    }
    i++
  }

  return true;
}

function isSorted(arr) {
  const n = arr.length;

  return isSortedIncreasing(arr, n) 
    ? "Ascending"
    : isSortedDecreasing(arr, n)
      ? "Descending"
      : "Not sorted";
}
