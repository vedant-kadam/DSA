let arr = [6, 3, 0, 5];

//the basic is that we need to set the largest element to the correct position

function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      //as they are already sorted
      break;
    }
  }
  console.log(arr);
}

bubbleSort();
