let arr = [1,4,45,6,0,19];
let x = 51;


function findSmallestSubArr(){
    let prefixSumArr = new Array(arr.length);;
    let n = arr.length;
    for(let i=0;i<n;i++){
        prefixSumArr[i]=0;
    }
    prefixSumArr[0] = arr[0];
    for(let  i=1;i<n;i++){
        prefixSumArr[i]=arr[i] + prefixSumArr[i-1];
    }
    console.log("prefix Sum arr ",prefixSumArr);
    let maxArrNo = 9999999999;
    for(let i =0;i<n;i++){
        let currEl = prefixSumArr[i];

        if(currEl > x){
            console.log(currEl);
            let arrCount = 0;
            let j=0;
            console.log("value if i ",i);
            for(j =i;j>=0;j--){
               arrCount+=arr[j];
               console.log(arrCount,"arr")
               if(arrCount > x){
                console.log(j,i,"test");
                if( (j-i) < maxArrNo){
                    maxArrNo = j-i;
                }
                break;
               }
            }
           
        } 
    }

    console.log(maxArrNo);
    
}


findSmallestSubArr();