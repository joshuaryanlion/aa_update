function reverse(str) {
    if (str.length === 0) {
      return "";
    }
    let first = str[0];
    return reverse(str.slice(1)) + first;
  }
