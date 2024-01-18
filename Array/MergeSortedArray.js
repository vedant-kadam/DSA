let ar1 = [1, 5, 9, 10, 15, 20];
let ar2 = [2, 3, 8, 13];


//mergeTwoSortedArray();
function mergeTwoSortedArray(){
    let len1 = ar1.length;
    let len2 = ar2.length;

    let i=0,j=0;

    while(ar1[len1-1] > ar2[0]){

        if(ar1[i] > ar2[0]){
            let temp = ar1[i];
            ar1[i] = ar2[0];
            ar2[0] = temp;
            ar2.sort((a,b)=>a-b);
            
        }
        i++;
    }

    console.log(ar1,ar2);
}


function inO1 (){
    
}