console.log("test");
let oldarr = [ 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9 ];
let maxNum_1 = Number.MIN_VALUE;
let maxNum_3 = Number.MIN_VALUE;
let maxNum_2 = Number.MIN_VALUE;



function findMax(){

    if(arr.length < 3)return;
    for(let i=0;i<arr.length;i++){
        let currEl = arr[i];
        if(currEl > maxNum_1){
            maxNum_3 = maxNum_2;
            maxNum_2 = maxNum_1;
            maxNum_1 = currEl;
        }else if(currEl > maxNum_2){
            maxNum_3 = maxNum_2;
            maxNum_2 = currEl;
        }else if(currEl > maxNum_3){
            maxNum_3 = currEl;
        }
    }
    console.log(maxNum_1,maxNum_2,maxNum_3);
    
}


function findSecondMax(){
    if(arr.length <2)return;

    let maxVal = Number.MIN_VALUE;
    let secondMaxVal = Number.MIN_VALUE;

    for(let  i=0;i<arr.length;i++){
        let currEl = arr[i];
        if(currEl > maxVal){
            secondMaxVal = maxVal;
            maxVal = currEl;
          
        }else if(secondMaxVal < currEl && currEl != maxVal){
            secondMaxVal = currEl;
        }

    }
    console.log(secondMaxVal);
}

function moveZeroToEnd(){

    let arr = [...oldarr];
    let startIdx = 0;
    let endIdx = arr.length-1;
   
    while(startIdx < endIdx){
        let staticVal = arr[startIdx];
        if(staticVal == 0){
            arr[startIdx] = arr[endIdx];
            arr[endIdx] = staticVal;
            endIdx--;
        }else{
            startIdx++;
        }
    }
    console.log(arr);
}

function pushZerosToEnd(arr, n)  
{  
    let count = 0; // Count of non-zero elements  
  
    // Traverse the array. If element encountered is non-  
    // zero, then replace the element at index 'count'  
    // with this element  
    for (let i = 0; i < n; i++)  {
        if (arr[i] != 0)  {
            let currCount = count++;
            console.log(currCount);
            arr[currCount] = arr[i]; // here count is  
            // incremented  
        }}


    console.log(count);
           
  
    // Now all non-zero elements have been shifted to  
    // front and 'count' is set as index of first 0.  
    // Make all elements 0 from count to end.  
    while (count < n)  
        arr[count++] = 0;  
}  


pushZerosToEnd(oldarr,oldarr.length);
//moveZeroToEnd();


// findMax();
// findSecondMax();


