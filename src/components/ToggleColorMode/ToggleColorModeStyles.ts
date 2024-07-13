/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles'; 

export const ToggleColorModeStyles = {
	Box: styled(Box)(({ theme }) => ({
		bgcolor: theme.palette.background.default,
		color: theme.palette.text.primary,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}))
}