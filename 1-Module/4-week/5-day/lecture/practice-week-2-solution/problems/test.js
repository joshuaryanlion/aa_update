function bar() {
    var rand = "abc";

    if (true) {
      const rand = "efg";
    }
    return rand;
  }

 console.log(bar()); // ???
