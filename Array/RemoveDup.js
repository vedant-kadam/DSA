let arr = [12, 10, 9, 45, 2, 10, 10, 45];

function printArrWithobj(){
    let obj = {};
arr.forEach(item=>{
   if(obj[item]){
    obj[item]++;
   }else{
    obj[item] = 1;
   }
})
let newArr = [];
Object.keys(obj).forEach(item=>{
    newArr.push(item);
});
console.log(newArr);
}


function printUniqueArrWithLoop(){
 
    for(let i =0;i<arr.length;i++){
        let j =0;
        for(j=0;j<i;j++){
            if(arr[i] == arr[j]){
                console.log(i,j,"indide");
                break;
            }
        }

        if(i == j){
            console.log(j,"end print");
            console.log(arr[i]);
        }
    }
}

printUniqueArrWithLoop();