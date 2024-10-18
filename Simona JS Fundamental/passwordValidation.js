function checkAndEncryptPasswords(input) {
    let numInputs = Number(input.shift());
    let pattern = /([\S]+)>(?<nums>[0-9]{3})\|(?<lowLetters>[a-z]{3})\|(?<upLetter>[A-Z]{3})\|(?<symbols>[^/w<>]{3})<\1/;
    
    for (let i = 0; i < numInputs; i++) {
      let password = input[i];
      
      if (pattern.test(password)) {
        let validPass = password.match(pattern);

        console.log("Password: " + validPass.groups.nums + validPass.groups.lowLetters + validPass.groups.upLetter + validPass.groups.symbols);
      } else {
        console.log("Try another password!");
      }
    }
  }
 checkAndEncryptPasswords([3,
 "##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
 "$$<111|noo|NOPE|<<>$$"])

 //\k<nums>