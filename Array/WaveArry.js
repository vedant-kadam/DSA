//let  arr  = [20,10,8,6,4,2];
let  arr  = [10, 90, 49, 2, 1, 5, 23 ];

function waveArr(){

    for(let i=0;i<arr.length-1;i++){
        if(i%2 == 0){
            if(arr[i] < arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }else{
            if(arr[i] >arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        console.log(arr);
    }
    console.log("final");
    console.log(arr);
}

waveArr();