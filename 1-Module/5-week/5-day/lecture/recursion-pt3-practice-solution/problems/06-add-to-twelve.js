function addToTwelve(arr) {
    if (arr.length === 1) {
      return false;
    }
    let first = arr[0];
    let second = arr[1];
    if (first + second === 12) {
      return true;
    }
    arr.shift()
    return addToTwelve(arr);
  }
