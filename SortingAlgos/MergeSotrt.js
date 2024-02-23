let arr = [12, 11, 13, 5, 6, 7];

function mergeSort(arr1, l, r) {
  if (l >= r) {
    return;
  }
  console.log("ebter", l, r);
  let m = l + parseInt((r - l) / 2);
  mergeSort(arr1, l, m);
  mergeSort(arr1, m + 1, r);
  mergeArr(arr1, l, m, r);
  //console.log(arr);
}

function mergeArr(arrmain, l, m, r) {
  let arr1Len = m - l + 1;
  let arr2Len = r - m;
  let arr1 = new Array(arr1Len);
  let arr2 = new Array(arr2Len);

  for (let i = 0; i < arr1Len; i++) {
    arr1[i] = arrmain[l + i];
  }
  for (let j = 0; j < arr2Len; j++) {
    arr2[j] = arrmain[m + j + 1];
  }

  console.log(arr1, "arr1");
  console.log(arr2, "arr2");
  let i = 0,
    j = 0;
  let k = l;
  console.log(k, "k is ");
  while (i < arr1Len && j < arr2Len) {
    if (arr1[i] <= arr2[j]) {
      arrmain[k] = arr1[i];
      i++;
    } else {
      arrmain[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < arr1Len) {
    arrmain[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2Len) {
    arrmain[k] = arr2[j];
    j++;
    k++;
  }
  console.log(arrmain, l, m, r);
}

mergeSort(arr, 0, arr.length - 1);
//printArray(arr, arr.length);
function printArray(A, size) {
  for (var i = 0; i < size; i++) console.log(A[i] + " ");
}

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
// function merge(arr, l, m, r) {
//   var n1 = m - l + 1;
//   var n2 = r - m;

//   // Create temp arrays
//   var L = new Array(n1);
//   var R = new Array(n2);

//   // Copy data to temp arrays L[] and R[]
//   for (var i = 0; i < n1; i++) L[i] = arr[l + i];
//   for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

//   // Merge the temp arrays back into arr[l..r]

//   // Initial index of first subarray
//   var i = 0;

//   // Initial index of second subarray
//   var j = 0;

//   // Initial index of merged subarray
//   var k = l;

//   while (i < n1 && j < n2) {
//     if (L[i] <= R[j]) {
//       arr[k] = L[i];
//       i++;
//     } else {
//       arr[k] = R[j];
//       j++;
//     }
//     k++;
//   }

//   // Copy the remaining elements of
//   // L[], if there are any
//   while (i < n1) {
//     arr[k] = L[i];
//     i++;
//     k++;
//   }

//   // Copy the remaining elements of
//   // R[], if there are any
//   while (j < n2) {
//     arr[k] = R[j];
//     j++;
//     k++;
//   }
// }

// // l is for left index and r is
// // right index of the sub-array
// // of arr to be sorted
// function mergeSort(arr, l, r) {
//   if (l >= r) {
//     return;
//   }
//   var m = l + parseInt((r - l) / 2);
//   mergeSort(arr, l, m);
//   mergeSort(arr, m + 1, r);
//   merge(arr, l, m, r);
// }

// // Function to print an array
// function printArray(A, size) {
//   for (var i = 0; i < size; i++) console.log(A[i] + " ");
// }

// var arr = [12, 11, 13, 5, 6, 7];
// var arr_size = arr.length;

// console.log("Given array is ");
// printArray(arr, arr_size);

// mergeSort(arr, 0, arr_size - 1);

// console.log("Sorted array is ");
// printArray(arr, arr_size);

// This code is contributed by SoumikMondal
