let arr =  [12, 15, 18, 2, 3, 6 ];

let roationCount = 0;


//we need to find the right rotaion;

//

function linerSerchApproch(){
    let count = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i] < arr[i-1]){
            count = i;
            break;
        }
    }

    
        console.log("number of rotation",count);
   
}


function throughBinarySearch(l,r){

    if(l > r){
        return 0;
    }

    if(l==r)return l;

    let mid = Math.floor((l + (r-l)/2)); 

    console.log(mid);
    let len = arr.length-1;
    

    if(mid < r && arr[mid] > arr[mid+1]){
        return mid+1;
    }

    if( mid > l  && arr[mid]  < arr[mid-1]){
        return mid;
    }
    
     
    if(arr[r] > arr[mid]){
        return throughBinarySearch(l,mid-1);
    }

    return throughBinarySearch(mid+1,r);  //in log n time and space
    



}

///console.log("Through Binary Search" , throughBinarySearch(0,arr.length-1));

//linerSerchApproch();


function iterativeBinarySearch(){
    let low = 0;
    let high = arr.length-1;
    let n = arr.length;
    while(low <= high){

      let mid = Math.floor(low + (high-low)/2);
      console.log(arr);
      console.log("mid" ,mid);
      let prev = (mid-1+n)%n;
      console.log("prev",prev);
      let next = (mid+1)%n;
      console.log("next",next);

      if(arr[mid] <= arr[next] && arr[mid] <= arr[prev]){
        return mid;
      }
      else if (arr[mid]<=arr[high]) 
      high = mid ;  
    else if (arr[mid]>=arr[low])  
      low=mid+1;
      

    }

    return 0;

}

console.log("Through iteratiive Binary Search" , iterativeBinarySearch());
