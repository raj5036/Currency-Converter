/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CurrencyConverterStyles = {
	Box: styled(Box)(({ theme }) => ({
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
	})),
	Header: styled(Typography)(( {theme} ) => ({
		marginBottom: theme.spacing(3)
	})),
	ResponseBox: styled(Box)(({ theme }) => ({
		marginTop: theme.spacing(3),
		textAlign: 'center'
	}))
}