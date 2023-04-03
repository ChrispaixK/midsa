function miniMaxSum(arr) {
  // Write your code here
  let min=0;
  let max=0;
  arr.sort((a, b) => a - b);
  for (let i=0;i<arr.length -1 ;i++){
    min+= arr[i];
  }
  for (let i=1;i<arr.length ;i++){
    max+= arr[i];
  }
  console.log(`${min} ${max}`);
}

const test = [1, 3, 5, 9, 7];

console.log(miniMaxSum(test)); 
