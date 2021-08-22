setTimeout(function() {       //1
  setTimeout(function() {     //6
    q();                      //12
  }, 15);

  d();                        //7

  setTimeout(function() {     //8
    n();                      //11
  }, 5);

  z();                        //9
}, 10);

setTimeout(function() {       //2
  s();                        //10
}, 20);

setTimeout(function() {       //3
  f();                        //5
});

g();                          //4

// g, f, d, z, s, n, q - my answer
// g, f, d, z, n, s, q - the right answer.
//                       n is delayed for 15ms, s for 20ms, and q for 25ms