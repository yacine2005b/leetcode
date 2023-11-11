/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	let retArr = []
	for (let i = 0; i < arr.length; i++) {
		retArr.push(fn(arr[i], i))
	}
	return retArr
};