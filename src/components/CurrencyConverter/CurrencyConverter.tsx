import { useEffect, useState } from "react";
import { Box, Button, MenuItem, Select, Stack, TextField, Typography, useTheme } from "@mui/material";
import { CurrencyConverterStyles } from "./CurrencyConverterStyles";
import { getHistoricalRates, getSupportedCurrencies } from "../../utils/ApiClient";
import { Loader } from "../Loader/Loader";
import { DatePicker } from "@mui/x-date-pickers";
import { toast } from "react-toastify";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState<number>(0)
	const [currencies, setCurrencies] = useState<string[]>([])
	const [sourceCurrency, setSourceCurrency] = useState<string>('USD')
	const [targetCurrency, setTargetCurrency] = useState<string>('USD')
	const [loading, setLoading] = useState<boolean>(false)
	const [date, setDate] = useState<Date>(new Date())
	const [convertedAmount, setConvertedAmount] = useState<number>(0)

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
		if (!amount) {
			toast.error('Please fill all the fields')
			return
		}

		if (sourceCurrency === targetCurrency) {
			toast.error('Source and Target currency cannot be same')
			return
		}

		getHistoricalRates(sourceCurrency, date, amount)
			.then((response) => {
				console.log('response', response)
				setConvertedAmount(response.conversion_amounts[targetCurrency])
			})
			.catch((error) => {
				console.log('error', error)
			})
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

			{convertedAmount !== 0 && (
				<Box>
					<Typography variant="body1">
						{convertedAmount}
					</Typography>
				</Box>
			)}

		</CurrencyConverterStyles.Box>
	);
};

export default CurrencyConverter