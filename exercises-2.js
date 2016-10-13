// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
	if (x > y) 
		return x;
	else if (x < y)
		return y;}
	// else 
	// 	return "they are equal";


   
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
	if (x > y && x > z) {
	
		return x;
	
	} else if(y > z && y > x) {
	
		return y;
	
	} else if (z > y && z > x) {
	
		return z;
	
	}

	if (x > y ) {
		if (x > z) {
			return x;
		}
	} else if (y > x) {
		if (y > z) {
			return y;
		}
	} else if (z > x) {
		if (z > y) {
			return z;
		}
	}

}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
	

		function isVowel(string) {
			var character = string.toLowerCase();
			var vowels = ["a","e","i","o","u"];
			if (vowels.includes(character)) {return true}
				else {return false};
		}




		
	



  

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase) {
	var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
		for (var i = 0; i < phrase.length; i++)		
		consonants[i]; 

		if (consonants.includes(phrase)) 
			{return (consonants * consonants ) &&  ("o" + consonants + "o")};	
		 
			 
	}
 
	
// var vowels = ["a","e","i","o","u"];

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){
    return x.split("").reverse().join("");
}