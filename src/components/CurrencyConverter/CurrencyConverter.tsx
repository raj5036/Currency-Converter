import { useEffect, useState } from "react";
import { Button, CircularProgress, MenuItem, Select, Stack, TextField, Typography, useTheme } from "@mui/material";
import { CurrencyConverterStyles } from "./CurrencyConverterStyles";
import { getHistoricalRates, getSupportedCurrencies } from "../../utils/ApiClient";
import { DatePicker } from "@mui/x-date-pickers";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState<number>(0)
	const [currencies, setCurrencies] = useState<string[]>([])
	const [sourceCurrency, setSourceCurrency] = useState<string>('USD')
	const [targetCurrency, setTargetCurrency] = useState<string>('USD')
	const [loading, setLoading] = useState<boolean>(false)
	const [date, setDate] = useState<Date>(new Date())
	const [convertedAmount, setConvertedAmount] = useState<number>(0)
	const [convertedAmountLoading, setConvertedAmountLoading] = useState<boolean>(false)

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

		setConvertedAmountLoading(true)
		getHistoricalRates(sourceCurrency, date, amount)
			.then((response) => {
				console.log('response', response)
				setConvertedAmount(response.conversion_amounts[targetCurrency])
			})
			.catch((error) => {
				console.log('error', error)
			})
			.finally(() => setConvertedAmountLoading(false))
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
					sx={{
						textAlign: 'center'
					}}
				></TextField>

				<Typography variant="caption">Source Currency</Typography>
				{loading ? (
					<CircularProgress color="info"/>
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
					value={dayjs(date)}
					onChange={(e) => {
						if (!e) return
						const date = e.toDate()
						setDate(date)
					}}
				/>

				<Typography variant="caption">Target Currency</Typography>
				{loading ? (
					<CircularProgress color="info"/>
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
			<CurrencyConverterStyles.SubmitButton 
				variant="contained" 
				color={theme.palette.mode === 'dark' ? 'info' : 'warning'}
				onClick={onSubmitClick}
			>
				Convert
			</CurrencyConverterStyles.SubmitButton>

			<CurrencyConverterStyles.ResponseBox>
				{convertedAmountLoading ? (
					<CircularProgress color="success"/>
				) : convertedAmount !== 0 ? (
					<Typography variant="h2" color={theme.palette.text.success}>
						{convertedAmount}
					</Typography>
					
				): null}
			</CurrencyConverterStyles.ResponseBox>

		</CurrencyConverterStyles.Box>
	);
};

export default CurrencyConverter