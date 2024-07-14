import { useEffect, useState, useRef } from "react";
import { Box, CircularProgress, MenuItem, Select, Stack, TextField, Tooltip, Typography, useTheme } from "@mui/material";
import { CurrencyConverterStyles } from "./CurrencyConverterStyles";
import { getHistoricalRates, getSupportedCurrencies } from "../../utils/ApiClient";
import { DatePicker } from "@mui/x-date-pickers";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { DecimalToTwoPlaces } from "../../utils/Functions";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState<number>(0)
	const [currencies, setCurrencies] = useState<string[]>([])
	const [sourceCurrency, setSourceCurrency] = useState<string>('USD')
	const [targetCurrency, setTargetCurrency] = useState<string>('USD')
	const [loading, setLoading] = useState<boolean>(false)
	const [date, setDate] = useState<Date>(new Date())
	const [convertedAmount, setConvertedAmount] = useState<number>(0)
	const [convertedAmountLoading, setConvertedAmountLoading] = useState<boolean>(false)

	const responseViewRef = useRef<null | HTMLHeadingElement>(null)

	useEffect(() => {
		setLoading(true)
		getSupportedCurrencies()
			.then((response) => {
				setCurrencies(Object.keys(response.conversion_rates))
			})
			.catch((error) => {
				console.log('error fetching supported currencies', error)
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
				if (!response.conversion_amounts[targetCurrency]) {
					toast.error('Information for this currency on the selected Date is not available')
					setConvertedAmountLoading(false)
					return
				}

				setConvertedAmount(response.conversion_amounts[targetCurrency])
			})
			.catch((error) => {
				console.log('error fetching historical rates', error)
			})
			.finally(() => {
				setConvertedAmountLoading(false)
				if (responseViewRef.current) {
					responseViewRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
				}
			})
	}

	const theme = useTheme();

	return (
		<CurrencyConverterStyles.Box>
			<CurrencyConverterStyles.Label variant="body1">
				Please put an amount to continue...
			</CurrencyConverterStyles.Label>
			<Stack 
				direction="row" 
				justifyContent={"center"}
				alignItems={"center"}
				spacing={4} 
				marginBottom={theme.spacing(5)} 
			>
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
					<CircularProgress color="info"/>
				) : (
					<Tooltip title="Source Currency" placement="right">
						<Select
							labelId="source-currency"
							id="source-currency"
							value={sourceCurrency}
							size="small"
							onChange={(e) => setSourceCurrency(e.target.value)}
						>
							{currencies.map((currency) => (
								<MenuItem key={currency} value={currency}>{currency}</MenuItem>
							))}
						</Select>
					</Tooltip>
				)}
			</Stack>
			<Stack direction="column" spacing={4} sx={{marginBottom: theme.spacing(3)}} alignItems={"center"}>
				<DatePicker 
					label="Date"
					value={dayjs(date)}
					onChange={(e) => {
						if (!e) return
						const date = e.toDate()
						setDate(date)
					}}
					sx={{width: theme.spacing(40)}}
				/>

				<Box component={"div"}>
					<CurrencyConverterStyles.Label variant="body1">
						Target Currency
					</CurrencyConverterStyles.Label>
					{loading ? (
						<CircularProgress color="info"/>
					) : (
						<Select
							labelId="target-currency"
							id="target-currency"
							value={targetCurrency}
							size="small"
							onChange={(e) => setTargetCurrency(e.target.value)}
							sx={{width: theme.spacing(40)}}
						>
							{currencies.map((currency) => (
								<MenuItem key={currency} value={currency}>{currency}</MenuItem>
							))}
						</Select>
					)}
				</Box>
			</Stack>
			<CurrencyConverterStyles.SubmitButton 
				variant="contained" 
				color={theme.palette.mode === 'dark' ? 'info' : 'warning'}
				onClick={onSubmitClick}
			>
				Convert
			</CurrencyConverterStyles.SubmitButton>

			<CurrencyConverterStyles.ResponseBox component={"div"}>
				{convertedAmountLoading ? (
					<CircularProgress color="success"/>
				) : convertedAmount !== 0 ? (
					<>
						<Stack direction="row" spacing={1} justifyContent={"center"} alignItems={"center"}>
							<Typography variant="body1">Currency converted for Date</Typography>
							<Typography variant="h6" color={theme.palette.text.success}>
									{date.toLocaleDateString()}
							</Typography>
						</Stack>
						<CurrencyConverterStyles.ResponseDivider variant="middle"/>
						<Typography variant="h2" color={theme.palette.text.success} component={"h2"} ref={responseViewRef}>
							{DecimalToTwoPlaces(Number(convertedAmount))} {targetCurrency}
						</Typography>
					</>
					
				): null}
			</CurrencyConverterStyles.ResponseBox>

		</CurrencyConverterStyles.Box>
	);
};

export default CurrencyConverter