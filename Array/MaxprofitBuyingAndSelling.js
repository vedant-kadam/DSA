let arr = [  2, 30, 15, 10, 8, 25, 80   ];

let max1 = 0;
let max2 = 0;

let maxDiff = 0;

function brustForceApproch(){
    let l = 0;
    let r = arr.length-1;
    let n= arr.length;
    for(let i =0;i<n-1;i++){
        for(let j =i+1;j<n;j++){
            let diff = arr[j] - arr[i];
            if(diff > maxDiff){
                maxDiff= diff;
            }
            if(diff > max1){
                max2 = max1;
                max1 = diff;
            }else if(diff > max2){
                max2 = diff;
            }
        }
    }
    console.log(maxDiff);
    // console.log(max1,max2);
}


function findMaxDiff(){
    let maxDiff = arr[1] - arr[0];
    let minEl = arr[0];

    for(let  i=1;i<arr.length;i++){

        console.log("for ",i,"it is " , maxDiff, minEl);
        if(arr[i] - minEl > maxDiff){
            maxDiff = arr[i] - minEl;
        }
        if(arr[i] < minEl){
            minEl = arr[i];
        }
        console.log("for ",i,"it is " , maxDiff, minEl);
    }

    console.log(maxDiff);
}


function findMAxProfit(){
    let profitArr = new Array(arr.length);
    let n = profitArr.length;
    for(let i=0;i<n;i++){
        profitArr[i] = 0;
    }

    let maxPrice = arr[n-1]; //because last element has zero profilt and we consider it to be the greatest temp
    

   //here we calculate from the end because we need the max amont of profit we can get from the start to end 
   //in end we need a max element
   // simple logic is low from front - high from end == max profit
    for(let i= n-2 ;i>=0;i--){

        if(arr[i] > maxPrice){
            maxPrice = arr[i];
        }
        //we calulate proft with respext to the last greatest price
        profitArr[i] = Math.max(profitArr[i+1], maxPrice - arr[i]);


        
    }

    console.log(profitArr);

    let minPrice = arr[0];

    for(let i =1;i<n;i++){
        if(arr[i] < minPrice){
            minPrice = arr[i];
        }

        profitArr[i] = Math.max(profitArr[i-1], profitArr[i]+ arr[i]- minPrice);


    }
    console.log(profitArr);
  

}

function dpApproch(){
    let firstBuy = -999999999;
    let firstSell = 0;
    let secondBuy = -99999999;
    let secondSell = 0;

    console.log(firstBuy,firstSell);
    console.log(secondBuy,secondSell);
    for(let i =0;i<arr.length;i++){
        
        firstBuy = Math.max(firstBuy,-arr[i]);
        firstSell = Math.max(firstSell,firstBuy + arr[i]);
        secondBuy = Math.max(secondBuy,firstSell -arr[i]);
        secondSell = Math.max(secondSell,secondBuy+arr[i]);


        console.log(firstBuy,firstSell);
        console.log(secondBuy,secondSell);
        console.log("-------------")

    }

    console.log(secondSell);

}

dpApproch();
//findMAxProfit();
//brustForceApproch();
//findMaxDiff();