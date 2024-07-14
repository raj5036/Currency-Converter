export const CapitalizeString = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


export const DecimalToTwoPlaces = (num: number) => {
	return parseFloat(num.toFixed(2));
}

export const isDateInFuture = (date: Date) => {
	const today = new Date();
	return date.getTime() > today.getTime();
}

export const isYearBefore1990 = (date: Date) => {
	const year = date.getFullYear();
	return year < 1990;
}
