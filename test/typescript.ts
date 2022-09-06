/**
 * Write a function to find the longest common prefix string in an array of
 * strings.
 *
 * $ longestPrefix(["cranberry","crawfish","crap"])
 * $ "cra"
 */

function longestPrefix(input: Array<string>) {
	let result = "";

	input[0].split("").reduce((prefix, currentLetter) => {
		const isPrefixValid = input.every((word) => word.startsWith(prefix));
		if (isPrefixValid) {
			result = prefix;
			return `${prefix}${currentLetter}`;
		}
		return result;
	}, "");
	return result;
}

console.log(longestPrefix(["cranberry", "crawfish", "crap"]));
