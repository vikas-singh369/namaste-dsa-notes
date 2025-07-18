let arr = [9, 8, 6, 3, 8, 5, 1, 2]

let firstLargest = -Infinity;
let secondLargest = -Infinity;
function findSecondLargest(arr) {
  if(arr.length < 2) return "No second largest number";
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest === -Infinity ? "No second larget found": secondLargest;
}


console.log(findSecondLargest(arr));