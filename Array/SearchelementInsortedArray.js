let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let key = 3;
let len = arr.length;
//first we find the pivot elemnt and then we perform binary search on both the arrray 

function findPivot(l,r){  //0.8
   
    console.log("l , r" , l ,r);
   if(l >r) {
    return -1;
    //no roataion
   }
   if(l==r)return l;

    let mid = Math.floor((l + r) / 2);

    //if( the  mid is grated than the next element then it is pivit as it a sorted array)
    if(mid < r && arr[mid] > arr[mid+1]){
        return mid;
    }
    if(mid > l  && arr[mid] < arr[mid-1]){
        return mid-1;
    }

    if(arr[l] >= arr[mid]){
       return findPivot(l,mid-1);
    }
    return findPivot(mid+1,r);

}


function findIndex(){
    let pivitElement=  findPivot(0,len-1);

    console.log("pivit eleent " , pivitElement);

    if(pivitElement  == -1){
        //no rotaion
       return  binarySearch(0,len-1);
    }

    if(arr[pivitElement] == key){
        return pivitElement;
    }

    if(arr[0] <= key ){
        return binarySearch(0,pivitElement-1);
    }else{
        return binarySearch(pivitElement+1,len-1);
    }



}


function binarySearch(l,r){

    if(l > r){
        return -1;
    }

    let mid = Math.floor((l+r)/2);

    if(arr[mid] == key){
        return mid;
    }

    if(arr[mid] > key){
        return binarySearch(l,mid-1);
    }

    return binarySearch(mid+1 ,r);
}




console.log(findIndex())