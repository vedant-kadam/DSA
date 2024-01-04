let arr = [ 1, 3, 2, 4, 7, 6, 9, 10 ];
let n = arr.length;

 function segrigateEvenOdd(){
    let i=0;
    let j=0;

    for(let k=0;k<n;k++){
        if(arr[j]%2==0){

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
        }

        j++;
        console.log(arr);
    }
    console.log("ans is ");
    console.log(arr);
 }
 segrigateEvenOdd();