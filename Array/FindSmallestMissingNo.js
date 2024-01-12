let arr = [0, 1, 2, 3, 4, 5, 6, 7, 10]; 
let n = arr.length; 


function usingBinarySearch(l,r){
    //time complexity LOg n;
    if(l>r){
        return r+1;
    }

    if(arr[l] !== l){
        return l;
    }

    let mid = Math.floor( l + (r-l)/2);

    if(arr[mid] === mid){
        return usingBinarySearch(mid+1,r);
    }

    return usingBinarySearch(l,mid);

}

arr = [ 0, 1, 2, 3, 4, 5, 7 ]; 
n = arr.length; 
  
function findFirstMissing(arr, start, end, first) 
{ 

    console.log("it is the start",start,end,first);
    if (start < end) 
    { 
        let mid = (start + end) / 2; 
      
        /** Index matches with value 
        at that index, means missing 
        element cannot be upto that po*/
        if (arr[mid] != mid + first) 
            return findFirstMissing(arr, start, 
                                    mid, first); 
        else
            return findFirstMissing(arr, mid + 1, 
                                    end, first); 
    } 
    console.log(start+first ,"it is the end");
    return start + first; 
} 
  
// Program to find Smallest 
// Missing in Sorted Array 
function findSmallestMissinginSortedArray(arr) 
{ 
      
    // Check if 0 is missing 
    // in the array 
    if (arr[0] != 0) 
        return 0; 
      
    // Check is all numbers 0 to n - 1 
    // are present in array 
    if (arr[arr.length - 1] == arr.length - 1) 
        return arr.length; 
      
    let first = arr[0]; 
      
    return findFirstMissing( 
        arr, 0, arr.length - 1, first); 
} 
console.log(findSmallestMissinginSortedArray(arr));