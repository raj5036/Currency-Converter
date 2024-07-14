import { useEffect, useState } from "react";
import { Box, Button, MenuItem, Select, Stack, TextField, Typography, useTheme } from "@mui/material";
import { CurrencyConverterStyles } from "./CurrencyConverterStyles";
import { getSupportedCurrencies } from "../../utils/ApiClient";
import { Loader } from "../Loader/Loader";
import { DatePicker } from "@mui/x-date-pickers";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState<number>(0)
	const [currencies, setCurrencies] = useState<string[]>([])
	const [sourceCurrency, setSourceCurrency] = useState<string>('USD')
	const [targetCurrency, setTargetCurrency] = useState<string>('USD')
	const [loading, setLoading] = useState<boolean>(false)
	const [date, setDate] = useState<Date>(new Date())
	const [conversionDone, setConversionDone] = useState<boolean>(false)

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
		console.log(date)
		setConversionDone(true)
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

				<Typography variant="caption">Source Currency</Typography>
				{loading ? (
					<Loader />
				) : (
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={sourceCurrency}
						label="Currency"
						size="small"
						onChange={(e) => setSourceCurrency(e.target.value)}
					>
						{currencies.map((currency) => (
							<MenuItem key={currency} value={currency}>{currency}</MenuItem>
						))}
					</Select>
				)}
				
				<DatePicker 
					label="Date"
					onChange={(e) => {
						if (!e) return
						const date = e.toDate()
						setDate(date)
					}}
				/>

				<Typography variant="caption">Target Currency</Typography>
				{loading ? (
					<Loader />
				) : (
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={targetCurrency}
						label="Currency"
						size="small"
						onChange={(e) => setTargetCurrency(e.target.value)}
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

			{conversionDone && (
				<Box>
					<Typography variant="body1">
						29827
					</Typography>
				</Box>
			)}

		</CurrencyConverterStyles.Box>
	);
};

export default CurrencyConverter