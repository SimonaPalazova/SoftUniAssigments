function manipulatePassword(inputPassword) {
    let password = inputPassword.shift();
    while (true) {
      
      let command = inputPassword.shift().split(' ');
  
      if (command[0] === 'Complete') {
        break;
      } else if (command[0] === 'Make') {
        let index = Number(command[2]);
  
        if (index >= 0 && index < password.length) {
          if (command[1] === 'Upper') {
            password = password.substring(0, index) + password.charAt(index).toUpperCase() + password.substring(index + 1);
          } else if (command[1] === 'Lower') {
            password = password.substring(0, index) + password.charAt(index).toLowerCase() + password.substring(index + 1);
          }
          console.log(password);
        }
      } else if (command[0] === 'Insert') {
        let index = Number(command[1]);
  
        if (index >= 0 && index <= password.length) {
          password = password.substring(0, index) + command[2] + password.substring(index);
          console.log(password);
        }
      } else if (command[0] === 'Replace') {
        let char = command[1];
        let value = Number(command[2]);
  
        if (password.includes(char)) {
          let asciiCode = char.charCodeAt(0);
          let newChar = String.fromCharCode(asciiCode + value);
          for(let i = 0; i < password.length; i++) {
            if (password[i] === char) {
              password = password.replace(char, newChar);
            }
          }
          
          console.log(password);
        }
      } else if (command[0] === 'Validation') {
        let valid = true;
  
        if (password.length < 8) {
          console.log('Password must be at least 8 characters long!');
          valid = false;
        }
  
        if (!/^[a-zA-Z0-9_]+$/.test(password)) {
          console.log('Password must consist only of letters, digits and _!');
          valid = false;
        }
  
        if (!/[A-Z]/.test(password)) {
          console.log('Password must consist at least one uppercase letter!');
          valid = false;
        }
  
        if (!/[a-z]/.test(password)) {
          console.log('Password must consist at least one lowercase letter!');
          valid = false;
        }
  
        if (!/\d/.test(password)) {
          console.log('Password must consist at least one digit!');
          valid = false;
        }
  
        if (valid) {
          continue;
        }
      }
    }
  }
  /*
  manipulatePassword(['invalidpassword*',
  'Add 2 p',
  'Replace i -50',
  'Replace * 10',
  'Make Upper 2',
  'Validation',
  'Complete'])
  */
  
  
  
  