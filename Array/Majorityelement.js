let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
let len = arr.length;


function findMajorityEl(){

    let obj = {};
    for (let i = 0; i< arr.length; i++) {
      const element =arr[i];
      if(obj[element]){
        obj[element]++;
      }else{
        obj[element] = 1;
      }

      if( Math.floor(obj[element] ) >= Math.floor( len/2)){
        console.log("the majoritye el is "+element);
        break;
      }


    }

    console.log(obj);
    
   
}
findMajorityEl();