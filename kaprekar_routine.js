//kaprekar constant 6174 kaprekar routine

/*helper function for kaprekar_routine function
takes string of n, desired length of n, puts 0s in front of n
so that n will be desired length but will not change its value as an int
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
helper function for kaprekar_routine function
takes a list of digits and returns a number composed of the elements of the list
*/
function make_int_from_list(numberlist) {
    var newint = "";
    var i = 0;
    var max = numberlist.length;
    while (i<max) {
        newint = newint.concat(numberlist[i].toString());
        i+=1;
    }
    //console.log(typeof newint === 'string');
    newint = Number(newint);
    //console.log(typeof newint === 'number');
    return newint;
}

function kaprekar_routine(n, iterations) {
    //console.log(iterations);
    iterations = typeof iterations !== 'undefined' ? iterations : 0;
    //console.log(iterations);
    if (n===6174) {
        return iterations;
    }
    else {
        var strn = n.toString();

    }
}

console.log(kaprekar_routine(6174));
/*
def kaprekar_routine(n, iterations=0):
    """Takes a positive integer n and returns how many iterations
    it took to get to 6174 (Kaprekar's constant)
    Input should be 4 or fewer digits and not a repdigit"""
    if n == 6174:
        return iterations
    else:
        strn = str(n)
        if len(strn) < 4:
            strn = add_0s_front_of_n(strn, 4)
        else:
            pass
        nlist = [int(x) for x in strn]
        #from small to large digits
        nlist.sort()
        #from large to small digits
        reversedlist = list(reversed(nlist))
        largen = make_int_from_list(reversedlist)
        smalln = make_int_from_list(nlist)
        newn = largen - smalln
        iterations += 1
        #print n, newn, largen, smalln, iterations
        return kaprekar_routine(newn, iterations)*/

