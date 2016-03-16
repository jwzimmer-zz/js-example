//note: I am imagining users accessing this function via a UI more or less like "enter number here: " with insructions.
//I don't know how to prevent someone from entering a valid value for iterations and throwing off the result if they access the function directly
//I can disallow non int values, negative values, and any values greater than 7, but for example if someone passed in an initial value 12, 1 then
// the output would be 4 instead of 3, but since that is still less than 7 I am not sure how to flag it.

var kaprekar_routine = require('../kaprekar_routine.js');

describe("Kaprekar Routine function", function() {
	//testing successes, valid inputs and the expected return value
		//sub categories: base case and recursive cases
	describe("> Base Case n=6174", function() {
	    it("should return 0 iterations", function() {
	    	expect(kaprekar_routine(6174)).toEqual(0);
	    });

	});
	describe("> Recursive Cases", function() {
		describe("> Recursive Case n=12, length 2,", function() {
		    it("should return 3 iterations", function() {
		    	expect(kaprekar_routine("12")).toEqual(3);
		    });
			it("should return the same value (3) with leading 0s in front of 12", function() {
		    	expect(kaprekar_routine("0012")).toEqual(3);
		    });
		});
		describe("> Recursive Case n=111, length 3 and almost a repdigit,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine("111")).toEqual(5);
		    });
		});
		describe("> Recursive Case n=1112, length 4,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine("1112")).toEqual(5);
		    });
		});
		describe("> Recursive Case n=1, length 1, minimum legal value,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine("1")).toEqual(5);
		    });
		});
		describe("> Recursive Case n=9998, length 4, maximum legal value,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine("9998")).toEqual(5);
		    });
		});
	});
	//testing failures, invalid input and the expected output
	describe("> Invalid input to function", function() {
		it("should return falure message if input is a negative number", function() {
			expect(kaprekar_routine("-1")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a number that is 5 digits long", function() {
			expect(kaprekar_routine("49857")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a number that is 5 digits long with a leading 0", function() {
			//The kaprekar_routine function could be designed to handle this since 09857 = 9857 which fits the requirements for the routine
			expect(kaprekar_routine("09857")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a number much longer than 4 digits", function() {
			expect(kaprekar_routine("758473626254643828473")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a decimal", function() {
			expect(kaprekar_routine("48.8")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a string", function() {
			expect(kaprekar_routine("hello world")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is 0", function() {
			expect(kaprekar_routine("0")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a 4 digit repdigit", function() {
			expect(kaprekar_routine("1111")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		describe("> Special Characters as invalid input to function", function() {
			it("should return falure message if input has ! in it", function() {
				expect(kaprekar_routine("48!")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});
			it("should return falure message if input has % in it", function() {
				expect(kaprekar_routine("48%")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});
			it("should return falure message if input has < in it", function() {
				expect(kaprekar_routine("<48")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});
			it("should return falure message if input has , in it", function() {
				expect(kaprekar_routine("48,120")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});

		});
	});
});
