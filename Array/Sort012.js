let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function swapEl(l,r){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function myApproch(){

    let start = 0;
    let mid = 0;
    let end = arr.length-1;
    for (let i = 0; (i < arr.length && i  <= end); i++ ) {
        const element = arr[i];

        // console.log("enter" , start,i,end);
        
        if(element === 0){
            swapEl(i,start);
            console.log(arr,"in ",i);
            start++;
           
        }else if(element===2){
            swapEl(i,end);
            console.log(arr,"in ",i);
            end--;
            i--;
        }
        // console.log("exit" , start,i,end);

        
    }

    console.log(arr);
}

myApproch();