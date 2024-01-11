let arr =  [ 10, -10, 20, -40 ];
let k = 6;

function brutForce(){
    let sumArr = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum += arr[j]
            sumArr.push(sum);
         }
        
    }

    console.log(sumArr,"not sorted");
    
    sumArr.sort((a,b)=>b-a);
    // sumArr.reverse();
    console.log("seryed",sumArr)
    console.log(sumArr[k-1]);

    //time complexuty 0(n2* logn2);
    //space 0(n);
}

function minHeap(){
    let prefixSumArr = [];
    prefixSumArr[0] = 0;
    prefixSumArr[1] =arr[0];
    for(let i=2;i<=arr.length;i++){
        prefixSumArr[i] = prefixSumArr[i-1] + arr[i-1];
    }
     
    console.log(prefixSumArr);
    let heap = [];
    let n = arr.length;
    for(let i =1;i<=n;i++){
        for(let j=i;j<=n;j++){
            let currsum = prefixSumArr[j] - prefixSumArr[i-1];
            console.log(currsum);

           

            if(heap.length < k){
                heap.push(currsum);
              //  console.log("heap in if",heap);
            }else{
                
                
                console.log("jheap in else",heap);
                if(heap[0] < currsum){
                    heap.reverse();
                    heap.pop();
                    heap.push(currsum);
                    console.log("heap in if else",heap);
                }
                
            }
            heap.sort((a,b)=>a-b);
            console.log("heap outside",heap);
        }
    }


    console.log(heap[0]);
    
    //time o(n2 logk)
    //space o(N)
}

brutForce();
minHeap();