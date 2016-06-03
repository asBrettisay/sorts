function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        var spliced = arr.splice(j, 1);
        arr.splice(i, 0, spliced[0]);
      }
    }
  }
}
