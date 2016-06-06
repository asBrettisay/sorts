const quickSort = num => {
  if (num.length === 1) return num;

  let pivot = num[num.length-1], left = [], right = [];

  for (var i = 0; i < num.length - 1; i++) {
    // Very important to loop up to but not include last number.
    // Otherwise the function will not terminate.
    if (num[i] < pivot) left.push(num[i]);
    else right.push(num[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
