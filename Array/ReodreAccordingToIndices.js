let arr = [50, 40, 70, 60, 90];
let index = [3,  0,  4,  1,  2];

let  i =0;
let j = index.length;

for(let k =0;k<j;k++){

    let correctIdx = index[k];
    let correctVal = arr[correctIdx];

    if(correctIdx != k){
        let tempIndex = index[k];
        let tempVal = arr[k];

         index[k] = index[tempIndex];
         index[tempIndex] = tempIndex;

         arr[k] = arr[tempIndex];
         arr[tempIndex] = tempVal;
    }


}

///time - 0(n)
//space  - 0(1)
console.log(arr,index);