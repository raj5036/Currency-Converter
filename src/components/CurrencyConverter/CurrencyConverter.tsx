import { useEffect, useState } from "react";
import { Button, MenuItem, Select, Stack, TextField, useTheme } from "@mui/material";
import { CurrencyConverterStyles } from "./CurrencyConverterStyles";
import { getSupportedCurrencies } from "../../utils/ApiClient";
import { Loader } from "../Loader/Loader";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState<number>(0)
	const [currencies, setCurrencies] = useState<string[]>([])
	const [selectedCurrency, setSelectedCurrency] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)
		getSupportedCurrencies()
			.then((response) => {
				setCurrencies(Object.keys(response.conversion_rates))
			})
			.catch((error) => {
				console.log('error', error)
			})
			.finally(() => setLoading(false))
	}, [])

	const onSubmitClick = () => {
		console.log('amount', amount)
		console.log('currencies', currencies)
	}

	const theme = useTheme();
	console.log('themeConverter', theme)

	return (
		<CurrencyConverterStyles.Box>
			<CurrencyConverterStyles.Header variant="h5">
				Please put an amount to continue..
			</CurrencyConverterStyles.Header>
			<Stack direction="column" spacing={4} sx={{marginBottom: theme.spacing(3)}}>
				<TextField 
					variant="outlined" 
					size="small"
					label="Amount"
					placeholder="1000"
					type="number"
					required
					onChange={(e) => setAmount(Number(e.target.value))}
				></TextField>

				{loading ? (
					<Loader />
				) : (
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedCurrency}
						label="Currency"
						size="small"
						onChange={(e) => setSelectedCurrency(e.target.value)}
					>
					{currencies.map((currency) => (
						<MenuItem key={currency} value={currency}>{currency}</MenuItem>
					))}
				</Select>
				)}
			</Stack>
			<Button 
				variant="contained" 
				color="info"
				onClick={onSubmitClick}
			>Convert</Button>
		</CurrencyConverterStyles.Box>
	);
};

export default CurrencyConverter