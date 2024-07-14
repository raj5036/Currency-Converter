/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Divider, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CurrencyConverterStyles = {
	Box: styled(Box)(({ theme }) => ({
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(2),
	})),
	Label: styled(Typography)(( {theme} ) => ({
		marginBottom: theme.spacing(2),
		color: theme.palette.text.info,
	})),
	Select: styled(Select)(({ theme }) => ({
		marginTop: theme.spacing(0),
	})),
	ResponseBox: styled(Box)(({ theme }) => ({
		marginTop: theme.spacing(3),
		textAlign: 'center'
	})),
	SubmitButton: styled(Button)(({ theme }) => ({
		margin: `${theme.spacing(3)} auto`,
		textAlign: 'center',
		height: theme.spacing(6),
		width: '20%',
		fontSize: theme.typography.body1.fontSize
	})),
	ResponseDivider: styled(Divider)(({ theme }) => ({
		margin: `0 auto ${theme.spacing(3)}`,
		width: theme.spacing(40),
	}))
}