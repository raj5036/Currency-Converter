import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderStyles = {
	Box: styled(Box)(({ theme }) => {
		console.log('theme', theme)
		return {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: '4rem',
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
			color: theme.palette.text.primary,
			bgcolor: theme.palette.background.default,
		}
	})
}