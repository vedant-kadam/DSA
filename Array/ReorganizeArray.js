let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

function rearrangeArr(){
    for(let  i =0;i<arr.length;i++){
        if(arr[i] !=-1){
            let correctIdx = arr[i];
            //swap
            let temp = arr[i];
            arr[i] = arr[correctIdx];
            arr[correctIdx] = temp;
            
        }
    }

    console.log(arr);
}


//time complexty = 0(n)
//space = 0(1)
//rearrangeArr();


let arr2 = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
let m = arr2.length;

function rearrancePostNegaive(){

  let i = 0;
  let  j= m-1;

 for (let i = 0; i < m; i++) {
    j = m-1;
    if(i%2==0){

        //even +ve
       
        if(arr2[i] < 0){ //if even pos is negative
            while(j>i){ // run a loop for the last element to check the first positve no from the end 
                if(arr2[j] > 0){
                    let temp = arr2[j];
                    arr2[j] = arr2[i];
                    arr2[i] = temp;
                    console.log("in posive while" , arr2);
                    break;
                    
                }
                j--;
            }
        }
        
    }else{
        if(arr2[i] > 0){
            while(j > i){
                if(arr2[j] < 0){
                    let temp = arr2[j];
                    arr2[j] = arr2[i];
                    arr2[i] = temp;
                    console.log("In negayive val", arr2);
                    break;
                }
                j--;
            }
        }
    }
    
}

console.log(arr2);
 

}


function rearragePosNegInOrder(){

    let i =0;
    for(let  j = 0;j <arr2.length;j++){
        if(arr2[j]  < 0){
            let temp = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp;
            i++;
        }
    } 
    console.log(arr2);
    let pos = i;
    let neg = 0;
    while(pos < arr2.length && pos > neg && arr2[neg] < 0 ){
        let temp = arr2[neg];
        arr2[neg] = arr2[pos];
        arr2[pos] = temp;
        console.log(arr2);
        neg+=2;
        pos++;
    }
    console.log(arr2);

}
//rearrancePostNegaive();
rearragePosNegInOrder();