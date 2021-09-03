const stringToNumber = (string) => {
	// console.log(string);

	var mySubString = string.substring(
		string.indexOf("$") + 1,
		string.lastIndexOf("bn")
	);

	// console.log(typeof mySubString);
	// console.log(mySubString);
	// console.log(parseInt(mySubString));

	return parseInt(mySubString);
};

export default stringToNumber;
