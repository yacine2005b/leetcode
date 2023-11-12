/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	let filtredArr = []
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			filtredArr.push(arr[i])
		}
	}
	return filtredArr
};