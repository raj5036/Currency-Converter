export const CapitalizeString = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


export const DecimalToTwoPlaces = (num: number) => {
	return parseFloat(num.toFixed(2));
}
