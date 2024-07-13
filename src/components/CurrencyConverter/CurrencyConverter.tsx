import { useEffect, useState } from "react";
import { Button, Stack, TextField, useTheme } from "@mui/material";
import { CurrencyConverterStyles } from "./CurrencyConverterStyles";
import { getSupportedCurrencies } from "../../utils/ApiClient";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState<number>(0)
	const [currencies, setCurrencies] = useState<string[]>([])

	useEffect(() => {
		getSupportedCurrencies()
			.then((response) => {
				setCurrencies(Object.keys(response.conversion_rates))
			})
			.catch((error) => {
				console.log('error', error)
			})
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
			<Stack direction="row" spacing={8} sx={{marginBottom: theme.spacing(3)}}>
				<TextField 
					variant="outlined" 
					size="small"
					label="Amount"
					placeholder="1000"
					type="number"
					required
					onChange={(e) => setAmount(Number(e.target.value))}
				></TextField>

				<div>{"Date"}</div>
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