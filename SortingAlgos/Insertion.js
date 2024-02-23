let arr = [25, 12, 0, 58, 3, 69, 4];

//o(n2) time
//o(1) sapce

function insertion() {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      console.log("in while start", arr);
      arr[j + 1] = arr[j];
      console.log("in while end", arr);
      j = j - 1;
    }
    arr[j + 1] = curr;
    console.log("Out while", arr);
  }
  console.log(arr);
}

insertion();
