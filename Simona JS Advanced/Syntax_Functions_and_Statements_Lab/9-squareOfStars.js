function squareOfStars(input) {
    let parameter;
    if (typeof input != "number") {
      parameter = 5;
    } else {
      parameter = input;
    }
  
    for (let i = 0; i < parameter; i++) {
      let line = "*";
      for (let u = 1; u < parameter; u++) {
        line += " *";
      }
      console.log(line);
    }
  }
  
  squareOfStars();
  squareOfStars(2);
  squareOfStars("s");