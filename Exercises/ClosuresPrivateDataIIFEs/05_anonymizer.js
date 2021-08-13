"use strict";

var Account = {
  init: function(emailStr, passwordStr, firstNameStr, lastNameStr) {
    this.emailStr = emailStr;
    this.passwordStr = passwordStr;
    this.firstNameStr = firstNameStr;
    this.lastNameStr = lastNameStr;
    this.displayName = (function anonymize() {
      let anonString = '';
      let charString = 'abcdefghijklmnopqrstuvwxyz';
      charString += charString.toUpperCase().concat('0123456789');
      for (let idx = 0; idx < 16; idx++) {
        anonString += charString[Math.floor(Math.random() * charString.length)];
      }

      return anonString;
    })();

    return this;
  },

  reanonymize: function() {
    this.displayName = (function anonymize() {
      let anonString = '';
      let charString = 'abcdefghijklmnopqrstuvwxyz';
      charString += charString.toUpperCase().concat('0123456789');
      for (let idx = 0; idx < 16; idx++) {
        anonString += charString[Math.floor(Math.random() * charString.length)];
      }
      return anonString;
    })();
  },

  resetPassword: function(oldPass, newPass) {
    if (oldPass === this.passwordStr) {
      this.passwordStr = newPass;
      return true;
    } else {
      return "Invalid password";
    }
  },

  ifGoodPassLogProperty: function(passAttempt, property) {
    return (passAttempt === this.passwordStr ? property : "Invalid password");
  },

  firstName: function(passAttempt) {
    return this.ifGoodPassLogProperty(passAttempt, this.firstNameStr);
  },

  lastName: function(passAttempt) {
    return this.ifGoodPassLogProperty(passAttempt, this.lastNameStr);
  },

  email: function(passAttempt) {
    return this.ifGoodPassLogProperty(passAttempt, this.emailStr);
  },
};

let fooBar = Object.create(Account);
fooBar.init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));

console.log(bazQux.firstName('123'));
console.log(bazQux.firstName('123456'));
console.log(fooBar.displayName);
console.log(bazQux.displayName);