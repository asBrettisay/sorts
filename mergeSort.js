function mergeSort(arr) {
  if (arr.length === 1) return arr;

  var arr2 = arr.splice(Math.floor(arr.length/2));

  return merge(mergeSort(arr), mergeSort(arr2));
}

function merge(arr1, arr2) {
  let ans = [];
  while(arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) ans.push(arr1.shift())
    else ans.push(arr2.shift())
  }

  while(arr1.length) {
    ans.push(arr1.shift());
  }
  while(arr2.length) {
    ans.push(arr2.shift());
  }

  return ans;

}
