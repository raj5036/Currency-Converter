import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { CurrencyConverterStyles } from "./CurrencyConverterStyles";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState<number>(0)

	const onSubmitClick = () => {
		console.log('amount', amount)
	}

	return (
		<CurrencyConverterStyles.Box>
			<CurrencyConverterStyles.Header variant="h5">
				Please put an amount to continue..
			</CurrencyConverterStyles.Header>
			<TextField 
				variant="outlined" 
				size="small"
				label="Amount"
				placeholder="1000"
				type="number"
				required
				onChange={(e) => setAmount(Number(e.target.value))}
			></TextField>
			<Button 
				variant="contained" 
				color="primary"
				onClick={onSubmitClick}
			>Convert</Button>
		</CurrencyConverterStyles.Box>
	);
};

export default CurrencyConverter