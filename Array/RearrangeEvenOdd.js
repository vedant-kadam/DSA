let arr = [1, 3, 2, 2, 5];
let p = 0;let q = arr.length-1;

function rearrangeData(){
    let newArr = new Array(q);
    arr.sort();
   console.log(newArr.length,"tets");
    for(let i=0;i<arr.length;i++){
        if((i+1)%2 == 0){
            newArr[i] = arr[q--];
        }else{
            newArr[i] = arr[p++];
        }
        console.log(newArr);
    }
    console.log(newArr);

}



function rearranceMaxMin(){
    let maxMinArr = [1, 2, 3, 4, 5, 6];
    let tempArr= new Array(maxMinArr.length);
    let start = 0;
    let end = maxMinArr.length -1;
    for(let i=0;i<maxMinArr.length;i++){
        if(i%2==0){
            tempArr[i] = maxMinArr[end--];
        }else{
            tempArr[i] = maxMinArr[start++];
        }
    }
    console.log(tempArr);
}
//rearrangeData();
rearranceMaxMin();