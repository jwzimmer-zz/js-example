///kaprekar constant 6174 kaprekar routine

/*
* helper function for kaprekar_routine function
* takes string of n, desired length of n, puts 0s in front of n
* so that n will be desired length but will not change its value as an int
*/
module.exports = {
  add_0s_front_of_n: function (stringn, desiredlength) {
    var num0 = desiredlength - stringn.length;
    var str0 = "";
    var i = 0;
    while (i<num0) {
      str0 = str0.concat("0");
      i += 1;
    }
    stringn = str0.concat(stringn);
    return stringn;
  },

  /*
   * helper function for kaprekar_routine function
   * takes a list of digits and returns a number composed of the elements of the list
   */
  make_int_from_list: function(numberlist) {
    var newint = "";
    var i = 0;
    var max = numberlist.length;
    while (i<max) {
      newint = newint.concat(numberlist[i].toString());
      i+=1;
    }
    newint = Number(newint);
    return newint;
  },

  /*
   * n should be an integer of 4 or fewer digits and not a repdigit (when it is 4 digits long;
   * it can be supplied by the user as a repdigit of 3 or fewer digits)
   */

   verify_kaprekar_n_input: function(n, iterations) {
        var strn = String(n);
        if (iterations === 0) {
            if (/^\d+$/.test(strn) === true) {
                n = Number(n);
                if ((strn.length <= 4) && (n > 0)) {
                    if (strn.length === 4) {
                        if ((strn[0] !== strn[1]) || (strn[2] !== strn[3]) || (strn[1] !== strn[2])) {
                            return [n, strn];
                        }
                        else {
                            return ["Input must be a positive integer of 4 or less digits in length",""];
                        }
                    }
                    else {
                        strn = module.exports.add_0s_front_of_n(strn, 4);
                        return [n, strn];
                    }
                }
                else {
                    return ["Input must be a positive integer of 4 or less digits in length",""];
                }
            }
            else {
                return ["Input must be a positive integer of 4 or less digits in length",""];
            }
        }
        else {
            if (strn.length < 4) {
                strn = module.exports.add_0s_front_of_n(strn, 4);
                return [Number(n), strn];
            }
            else {
                return [Number(n), strn];
            }
        }
   },

  /* Takes a positive integer n and returns how many iterations
   it took to get to 6174 (Kaprekar's constant)
   Input should be 4 or fewer digits and not a repdigit */
  kaprekar_routine: function(n, iterations) {
    //set 0 as default value of iterations
    iterations = typeof iterations !== 'undefined' ? iterations : 0;
    //since I am imagining a user and UI, user input would probably be interpreted as a string
    //(originally this function took a number as input)
    //so I need to convert the now expected "string" version of the input into a number
    //check that user has supplied valid initial input to function
    var narray = module.exports.verify_kaprekar_n_input(n, iterations);
    n = narray[0];
    var strn = narray[1];
    //if the user input was not valid, return a message about invalid input
    if (typeof n !== 'number') {
      return n;
    }
    //base case
    if (n===6174) {
      return iterations;
    }
    else {
      var nlist = [];
      var j = 0;
      while (j<strn.length) {
        nlist.push(strn[j]);
        j+=1;
      }
      //from small to large digits
      nlist.sort(function(a,b){return a-b;});
      var smalln = module.exports.make_int_from_list(nlist);
      //from large to small digits
      nlist.reverse();
      var largen = module.exports.make_int_from_list(nlist);
      var newn = largen - smalln;
      iterations += 1;
      //uncomment below line for debugging
      //console.log(n, strn, newn, largen, smalln, iterations);
      return module.exports.kaprekar_routine(newn, iterations);
      //you can use this line to intentionally trigger test failures in order to see how Jasmine works
      //return "hi";
    }
  }
};
