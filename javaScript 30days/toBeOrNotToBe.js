function expect(val) {
	return {
		toBe: function (otherVal) {
			const result = val === otherVal;
			if (!result) {
				throw Error("Not Equal");
			}
			return result;
		},
		notToBe: function (otherVal) {
			const result = val !== otherVal;
			if (!result) {
				throw Error("Equal");
			}
			return result;
		},
	};
}