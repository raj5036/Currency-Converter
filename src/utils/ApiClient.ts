// https://app.exchangerate-api.com/dashboard

import axios from "axios"

export const API_KEY = "352b707d5fbcafb682bfafae"

export const getSupportedCurrencies = () => {
	return Promise.resolve(
		axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
	)
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			return error
		})
}

export const getConversionRates = (sourceCurrency: string, targetCurrency: string) => {
	return Promise.resolve(
		axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${sourceCurrency}/${targetCurrency}`)
	)
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			error
		})
}

export const getHistoricalRates = (sourceCurrency: string, date: Date, amount: number) => {
	// Get Day, Month, Year
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()

	return Promise.resolve(
		axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/history/${sourceCurrency}/${year}/${month}/${day}/${amount}`)
	)
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			error
		})
}