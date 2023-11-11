/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let output = init
	return {
		increment: function () {
			output = output + 1
			return output
		},
		decrement: function () {
			output = output - 1
			return output
		},
		reset: function () {
			output = init
			return output
		}
	}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */