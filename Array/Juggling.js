let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d=2;  // no of rotaion

//simple method by using annother array time complexuty o(n) and space o(n);


function useTempArrForrotation(){
    
    let tempAr = [...arr];
    let newTempArr = new Array(tempAr.length);

    let currGlobalIndex = 0;

    for(let i= d;i<n;i++){
        newTempArr[currGlobalIndex] = tempAr[i];
        currGlobalIndex++;
    }

    for(let i=0;i<d;i++){
        newTempArr[currGlobalIndex] = tempAr[i];
        currGlobalIndex++;
    }

    console.log(newTempArr);

    
}


//2nd method

function rotateArrayForNumberOfrotaion(){

    let newArr =  [...arr];
    let i = 0;///starting rotation
   
    for( i=0;i<d;i++){
        let currVar = newArr[i];
        for(j=0;j<n-1;j++){
            newArr[j] = newArr[j+1];
        }
        newArr[n-1] = currVar;
    }

    console.log(newArr);
}



function usingJugglingAlgo(){
    let newArr = [...arr];
    d = d % n;
    let G_C_D = gcd(d,n);

    console.log(G_C_D);
    
    for(let i=0;i<G_C_D;i++){
        let temp = newArr[i];
        let  j = i;

        while(1){
            
            let k = j+d;
            console.log(k);
            if(k>=n){
                k=k-n;
            }
            if(k==i){break;}

            newArr[j] = newArr[k];
            console.log("inner loop",newArr,k,j);
            j=k;
            console.log(j);

        }

        newArr[j] = temp;
        console.log("outer loop ",newArr)
    }
    
}


// function gcd(a,b){
//     console.log(a,b);
//     if(b==0){
//         return a;
//     }else return gcd(b,a%b);
// }
function gcd( a, b){
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}
usingJugglingAlgo();

// rotateArrayForNumberOfrotaion();


// useTempArrForrotation();