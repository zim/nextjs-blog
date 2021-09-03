const stringToPay = (string) => {
	// console.log(string);
	let mySubString = 0;

	if (string === "Undisclosed") {
		// mySubString = 0;
		return mySubString;
	}

	if (mySubString === null) {
		// mySubString = 0;
		return mySubString;
	}

	mySubString = string.substring(
		string.indexOf("$") + 1,
		string.lastIndexOf("m")
	);

	// console.log(typeof mySubString);
	// console.log(mySubString);
	// console.log(parseFloat(mySubString));

	mySubString = parseFloat(mySubString);

	// console.log(typeof mySubString);

	return mySubString;
};

export default stringToPay;
