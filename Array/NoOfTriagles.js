let arr = [4,6,3,7];
let arr2 = [4,6,3,7 ];
let arr3 = [...arr2];
let count  = 0;
for(let i =0;i<arr.length;i++){
    for(let j= i+1;j<arr.length;j++){
        for(let k =j+1;k<arr.length;k++){
            if(arr[i] + arr[j] > arr[k]
                && arr[i] + arr[k] > arr[j]
                && arr[k] + arr[j] > arr[i]){
                    count++;
            }
        }
    }
}
//time complexty = n3
//space complexty = 1

let newCount = 0;
arr2.sort((a, b) => a-b);
console.log(arr2)
for(let i = 0;i<arr2.length-2;i++){
    let k = i+2;
    console.log ( "i &  k  == > " ,i,k )
    for(let j = i+1;j<arr2.length;j++){
        if(k  < arr2.length  && arr2[i] + arr2[j] > arr2[k]){
            console.log("triabge" , i , j ,k);
            k++;
        }

        if(k > j){
            console.log("K  > J==>", newCount, k);
            newCount+=k-j-1;
            console.log("new Count " , newCount);
        }
    }
}

//time complexty = n2
//space complexty = 1
//console.log(count);


//using a two poin ter aproch

let tpCount = 0;
arr3.sort();
for(let i=arr3.length-1;i>=1 ;i--){
    let l = 0  ;
    let r = i-1;

    while(l<r){
        if(arr3[l] + arr3[r] > arr[i]){
            console.log("l,r,i == > ",l,r,i);
            tpCount+=r-l;
            r--;

        }else{
            l++;
        }
    }
}

//time complexty = n2
//space complexty = 1
console.log("topcou",tpCount);

