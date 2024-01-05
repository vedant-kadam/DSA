let arr= [1,2,3,4,5];
let d=2;
let n = arr.length;
function rotateArr(){
    
    console.log(arr);
    console.log("-----------")
    d= d%n;
 for(let i=0;i<d/2;i++){
    let temp = arr[i];
    arr[i]=arr[d-i-1]  ;
    arr[d-i-1] = temp;
    console.log(arr);
 }
 console.log("----");
 
 let k = d;
 for(let  i=k;i<(n+k)/2;i++){
    let  temp = arr[i];
    arr[i]= arr[n+k-1-i];
    arr[n+k-i-1] = temp;
    console.log(arr);
 }
 console.log("-------");
 arr.reverse();
 console.log(arr);
 

}

rotateArr();
