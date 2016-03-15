//kaprekar constant 6174 kaprekar routine

/*
* helper function for kaprekar_routine function
* takes string of n, desired length of n, puts 0s in front of n
* so that n will be desired length but will not change its value as an int
*/
function add_0s_front_of_n(stringn, desiredlength) {
    var num0 = desiredlength - stringn.length;
    var str0 = "";
    var i = 0;
    while (i<num0) {
        str0 = str0.concat("0");
        i += 1;
    }
    stringn = str0.concat(stringn);
    return stringn;
}

/*
* helper function for kaprekar_routine function
* takes a list of digits and returns a number composed of the elements of the list
*/
function make_int_from_list(numberlist) {
    var newint = "";
    var i = 0;
    var max = numberlist.length;
    while (i<max) {
        newint = newint.concat(numberlist[i].toString());
        i+=1;
    }
    newint = Number(newint);
    return newint;
}

/*
* n should be an integer of 4 or fewer digits and not a repdigit (when it is 4 digits long;
* it can be supplied by the user as a repdigit of 3 or fewer digits)
*/
function verify_kaprekar_n_input(n, iterations) {
    var strn = n.toString();
    if ((iterations === 0) &&
        ((typeof n !== 'number') || (strn.indexOf(".") !== -1) || (strn.length > 4) || (n <= 0))) {
        //console.log("Input must be an integer of 4 or less digits in length");
        return ["Input must be a positive integer of 4 or less digits in length",""];
    }
    else if (strn.length < 4) {
        strn = add_0s_front_of_n(strn, 4);
        return [n, strn];
    }
    else {
        return [n, String(n)];
    }
}
/* Takes a positive integer n and returns how many iterations
    it took to get to 6174 (Kaprekar's constant)
    Input should be 4 or fewer digits and not a repdigit */
function kaprekar_routine(n, iterations) {
    //set 0 as default value of iterations
    iterations = typeof iterations !== 'undefined' ? iterations : 0;
    //base case
    if (n===6174) {
        return iterations;
    }
    else {
        //check that user has supplied valid initial input to function
        var narray = verify_kaprekar_n_input(n, iterations);
        n = narray[0];
        var strn = narray[1];
        if (typeof n !== 'number') {
            return n;
        }
        var nlist = [];
        var j = 0;
        while (j<strn.length) {
            nlist.push(strn[j]);
            j+=1;
        }
        //from small to large digits
        nlist.sort(function(a,b){return a-b;});
        var smalln = make_int_from_list(nlist);
        //from large to small digits
        nlist.reverse();
        var largen = make_int_from_list(nlist);
        var newn = largen - smalln;
        iterations += 1;
        //console.log(n, strn, newn, largen, smalln, iterations);
        return kaprekar_routine(newn, iterations);
    }
}

console.log(kaprekar_routine(6174));
console.log(kaprekar_routine(12));
console.log(kaprekar_routine(98282812));
console.log(kaprekar_routine(0));
console.log(kaprekar_routine(-1));
console.log(kaprekar_routine(9.4));

