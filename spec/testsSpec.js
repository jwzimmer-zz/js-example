//note: I am imagining users accessing this function via a UI more or less like "enter number here: " with insructions.

var kaprekar_routine = require('../kaprekar_routine.js');

describe("Kaprekar Routine function", function() {
	//testing successes, valid inputs and the expected return value
		//sub categories: base case and recursive cases
	describe("> Base Case n=6174", function() {
	    it("should return 0 iterations", function() {
	    	expect(kaprekar_routine.kaprekar_routine(6174)).toEqual(0);
	    });

	});
	describe("> Recursive Cases", function() {
		describe("> Recursive Case n=12, length 2,", function() {
		    it("should return 3 iterations", function() {
		    	expect(kaprekar_routine.kaprekar_routine("12")).toEqual(3);
		    });
			it("should return the same value (3) with leading 0s in front of 12", function() {
		    	expect(kaprekar_routine.kaprekar_routine("0012")).toEqual(3);
		    });
		});
		describe("> Recursive Case n=111, length 3 and almost a repdigit,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine.kaprekar_routine("111")).toEqual(5);
		    });
		});
		describe("> Recursive Case n=1112, length 4,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine.kaprekar_routine("1112")).toEqual(5);
		    });
		});
		describe("> Recursive Case n=1, length 1, minimum legal value,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine.kaprekar_routine("1")).toEqual(5);
		    });
		});
		describe("> Recursive Case n=9998, length 4, maximum legal value,", function() {
		    it("should return 5 iterations", function() {
		    	expect(kaprekar_routine.kaprekar_routine("9998")).toEqual(5);
		    });
		});
	});
	//testing failures, invalid input and the expected output
	// sub case: special characters as invalid input
	describe("> Invalid input to function", function() {
		it("should return falure message if input is a negative number", function() {
			expect(kaprekar_routine.kaprekar_routine("-1")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a number that is 5 digits long", function() {
			expect(kaprekar_routine.kaprekar_routine("49857")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a number that is 5 digits long with a leading 0", function() {
			//The kaprekar_routine function could be designed to handle this since 09857 = 9857 which fits the requirements for the routine
			expect(kaprekar_routine.kaprekar_routine("09857")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a number much longer than 4 digits", function() {
			expect(kaprekar_routine.kaprekar_routine("758473626254643828473")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a decimal", function() {
			expect(kaprekar_routine.kaprekar_routine("48.8")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a string", function() {
			expect(kaprekar_routine.kaprekar_routine("hello world")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is 0", function() {
			expect(kaprekar_routine.kaprekar_routine("0")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		it("should return falure message if input is a 4 digit repdigit", function() {
			expect(kaprekar_routine.kaprekar_routine("1111")).toEqual("Input must be a positive integer of 4 or less digits in length");
		});
		describe("> Special Characters as invalid input to function", function() {
			it("should return falure message if input has ! in it", function() {
				expect(kaprekar_routine.kaprekar_routine("48!")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});
			it("should return falure message if input has % in it", function() {
				expect(kaprekar_routine.kaprekar_routine("48%")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});
			it("should return falure message if input has < in it", function() {
				expect(kaprekar_routine.kaprekar_routine("<48")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});
			it("should return falure message if input has , in it", function() {
				expect(kaprekar_routine.kaprekar_routine("48,120")).toEqual("Input must be a positive integer of 4 or less digits in length");
			});

		});
	});
});

describe("Kaprekar Routine helper functions", function() {
	//testing the helper functions for kaprekar_routine
		//sub categories: the individual functions
	//since add_0s_front_of_n doesn't receive user input, it doesn't need to be tested for all kinds of crazy input
	describe("> add_0s_front_of_n function", function() {
	    it("should return n when n has length 4", function() {
	    	expect(kaprekar_routine.add_0s_front_of_n("6174",4)).toEqual("6174");
	    });
	    it("should return 0+n when n has length 3", function() {
	    	expect(kaprekar_routine.add_0s_front_of_n("174",4)).toEqual("0174");
	    });
	    it("should return 00+n when n has length 2", function() {
	    	expect(kaprekar_routine.add_0s_front_of_n("74",4)).toEqual("0074");
	    });
	    it("should return 000+n when n has length 1", function() {
	    	expect(kaprekar_routine.add_0s_front_of_n("4",4)).toEqual("0004");
	    });
	    it("should return 00000+n when n has length 1 and 6 is passed in as the length", function() {
	    	expect(kaprekar_routine.add_0s_front_of_n("4",4)).toEqual("0004");
	    });

	});
});