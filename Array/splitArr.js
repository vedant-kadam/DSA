let arr = [4, 3, 2, 1];

function findSplit() {
  let first = 0;
  let last = arr.length - 1;
  let firstSum = 0;
  let lastSum = 0;
  while (first <= last) {
    if (firstSum <= lastSum) {
      firstSum += arr[first];
      first++;
    } else {
      lastSum += arr[last];
      last--;
    }
  }
  console.log(firstSum, lastSum, firstSum === lastSum);
}

findSplit();
