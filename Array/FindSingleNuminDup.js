let arr = [2, 3, 5, 4, 5, 3, 4];


function  brutForce(){
   let nonDup = null;

   for(let i =0;i<arr.length;i++){
     let dupCount = 0;
     for(let j=0;j<arr.length;j++){
        if(arr[i] == arr[j]){
            dupCount++;
        }
     }

     if(dupCount ==1){
        console.log(arr[i]);
        break;
     }

   }
}


function usingXOr(){
    
    let res = arr[0];
    for(let i=1;i<arr.length;i++){
        res = res ^ arr[i];
        console.log(res,"res in lop");
    }

    console.log(res);
    //o(n)=>time and o(1)=>space
}
usingXOr();

/**
  it works like x or gate 
  where
   1 ^  1 = 0;
   1 ^ 0 = 1;

   i.e same buit  == 0 and different bit  == 1
 */
//brutForce();