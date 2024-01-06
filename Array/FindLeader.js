let arr = [16, 17, 4, 3, 5, 2];


function bruteForce(){
    
    for(let i=0;i<arr.length-1;i++){
        let isLeader = true;
        for(j = i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
                isLeader = false;
                break;
            }
        }
        if(isLeader){
            console.log(arr[i]);
        }
    }
    console.log(arr[arr.length-1]);
    
    // time o (n2) space 0(N)
}


function traverseEnd(){
    let max = arr[arr.length -1]
    console.log(max);
    for(let i = arr.length-2;i>=0;i--){
        if(arr[i] > max){
            max = arr[i];
            console.log(max);
        }
    }
    

    
    
}


traverseEnd();
//bruteForce();