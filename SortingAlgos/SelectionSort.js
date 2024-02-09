/// so in this algo we basically put the element in to its own postion by comparing it with the eelemts to its right so according to the codition is we want the array in ascending or decending
// let say our arr = [90,52,2,45,78,1];

//we compare all elemnts  with all the elements to its right and get the lowest elemnt
//in the given eg -
//for the firt pass the smallest index will be 5  i.e for value 1 so we will swap 0th index and the 5th index

//we will compare each elemtn for the next index and then put the correct value for that given index

//time complectyu O(n2);
//space complexity O(1);

let arr = [90,52,2,45,78,1];

function selectionSort(){
    for(let i=0;i<arr.length;i++){
        let minIndex = i;
        for(let j=i;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
}
selectionSort();