let arr = [10, 20, 35, 50, 75, 80];
let x = 70;

let l = 0;
let r = arr.length-1;
while(l <r){
    let currSum = arr[l] + arr[r];
    console.log(currSum);
    if(currSum === x){
        console.log("the two el are",arr[l] , arr[r]);
        break;
    }else if((x-currSum) > 0){
        l++;
    }else r--;
}