let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;


//brute force 

function bruteForce(){
    for(let  i=0;i<arr.length;i++){
        let currSum = 0;
        for(let j =i;j<n;j++){
            currSum+=arr[j];
            if(currSum == sum){
                console.log(i, j ,"<=== ans , i , j");
            }else if(currSum > sum){
                break;
            }
        }
    }
}

function slidingWindow(){

    let currSum = arr[0];
    let start = 0;
    let i;

    for(let i =1;i<= n;i++){

        while(currSum > sum && start < i-1){
            console.log("while starr");

            console.log("start in hwile ==> ", start) ;
            currSum = currSum - arr[start];
            console.log(currSum);
            start++;
            console.log(start);
            console.log("while end");
        }

        if(currSum === sum){

            let  p = i -1;
            console.log("and is ", start,p);
            break;
        }

        if(i<n){
            currSum = currSum+arr[i];
            console.log("currsum",currSum);
        }

    }


}

slidingWindow();
//sbruteForce();