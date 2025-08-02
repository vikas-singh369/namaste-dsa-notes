function BubbleSort(arr) {
  let n = arr.length ;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for(let j =0; j<n-1-i; j++){
      if(arr[j] > arr[j+1]){
        isSwapped = true
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

    if(!isSwapped) break;
  }
  return arr;
}

const arr = [0,5,8,3,11,4,2,1]

console.log(BubbleSort(arr));
