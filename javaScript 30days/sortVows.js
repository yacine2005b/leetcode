/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
	let vowels = s.match(/[aeiou]/gi);
	//The g flag ensures it matches all occurrences, not just the first one.
	//The i flag makes the matching case-insensitive, so it matches both uppercase and lowercase letters.
	if (vowels !== null) {
		vowels.sort();
		let sortedVowArr = s.replace(/[aeiou]/gi, () => vowels.shift());
		return sortedVowArr;
	} else {
		return s;
	}
};