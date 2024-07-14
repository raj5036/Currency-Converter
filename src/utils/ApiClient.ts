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