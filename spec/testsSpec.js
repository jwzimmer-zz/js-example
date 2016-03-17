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
	    it("should return 00000+n when n has length 1 and 6 is passed in as the desired length", function() {
	    	expect(kaprekar_routine.add_0s_front_of_n("4",4)).toEqual("0004");
	    });
	});
	//since make_int_from_list doesn't receive user input, it doesn't need to be tested for all kinds of crazy input
	describe("> make_int_from_list function", function() {
	    it("should return 1234 when the input list is [1,2,3,4]", function() {
	    	expect(kaprekar_routine.make_int_from_list([1,2,3,4])).toEqual(1234);
	    });
	    it("should return 234 when the input list is [0,2,3,4], leading 0s should be fine", function() {
	    	expect(kaprekar_routine.make_int_from_list([0,2,3,4])).toEqual(234);
	    });
	    it("should return 33234 when the input list is [3,3,2,3,4], length greater than 4 should be fine", function() {
	    	expect(kaprekar_routine.make_int_from_list([3,3,2,3,4])).toEqual(33234);
	    });
	    it("should return 33234 when the input list is [33,2,3,4], numbers with multiple digits should be fine", function() {
	    	expect(kaprekar_routine.make_int_from_list([33,2,3,4])).toEqual(33234);
	    });
	    it("should return 33230 when the input list is [3,3,2,3,0], trailing 0s should be fine", function() {
	    	expect(kaprekar_routine.make_int_from_list([3,3,2,3,0])).toEqual(33230);
	    });
	});
	//this function does receive crazy user input via the main kaprekar_routine function, so it should be tested
	describe("> verify_kaprekar_n_input function", function() {
		describe("> Invalid inputs", function() {
			describe("> Special characters", function() {
			    it("should return [failure_message, empty_string] when the input has special characters [,,,]", function() {
			    	expect(kaprekar_routine.verify_kaprekar_n_input("[1,2,3,4]")).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
			    });
			    it("should return [failure_message, empty_string] when the input has special characters %", function() {
			    	expect(kaprekar_routine.verify_kaprekar_n_input("46%")).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
			    });
			    it("should return [failure_message, empty_string] when the input has special characters !", function() {
			    	expect(kaprekar_routine.verify_kaprekar_n_input("!")).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
			    });
			    it("should return [failure_message, empty_string] when the input has special characters ^", function() {
			    	expect(kaprekar_routine.verify_kaprekar_n_input("4^")).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
			    });
			    it("should return [failure_message, empty_string] when the input has special characters =", function() {
			    	expect(kaprekar_routine.verify_kaprekar_n_input("467=")).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
			    });
			    it("should return [failure_message, empty_string] when the input has special characters +", function() {
			    	expect(kaprekar_routine.verify_kaprekar_n_input("+78")).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
			    });
			    it("should return [failure_message, empty_string] when the input has special characters _", function() {
			    	expect(kaprekar_routine.verify_kaprekar_n_input("46_78")).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
			    });
			});
			describe("> Invalid numbers", function() {
				it("should return [failure_message, empty_string] when the input is a decimal number", function() {
		    		expect(kaprekar_routine.verify_kaprekar_n_input("46.9",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    		expect(kaprekar_routine.verify_kaprekar_n_input(".9",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    		expect(kaprekar_routine.verify_kaprekar_n_input("46.",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    	});
		    	it("should return [failure_message, empty_string] when the input is a negative number", function() {
		    		expect(kaprekar_routine.verify_kaprekar_n_input("-46",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    	});
		    	it("should return [failure_message, empty_string] when the input is a 4 digit repdigit", function() {
		    		expect(kaprekar_routine.verify_kaprekar_n_input("4444",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    	});
		    	it("should return [failure_message, empty_string] when the input is 0", function() {
		    		expect(kaprekar_routine.verify_kaprekar_n_input("000",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    		expect(kaprekar_routine.verify_kaprekar_n_input("0",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    		expect(kaprekar_routine.verify_kaprekar_n_input("0000000000",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    	});
		    	it("should return [failure_message, empty_string] when the input is a long number (more than 4 digits)", function() {
		    		expect(kaprekar_routine.verify_kaprekar_n_input("465674382982736335525525252525252",0)).toEqual(["Input must be a positive integer of 4 or less digits in length",""]);
		    	});
			});
		});
	});
});