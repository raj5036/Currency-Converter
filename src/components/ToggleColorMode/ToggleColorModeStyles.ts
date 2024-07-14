/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles'; 

export const ToggleColorModeStyles = {
	Box: styled(Box)(({ theme }) => ({
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: theme.spacing(3),
	}))
}