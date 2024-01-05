let arr = [3,2,5,6,1,4];

for(let i=0;i<arr.length;i++){
    let index = arr[i]-1;
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
    console.log(arr);
}
console.log("-------------");
console.log(arr);