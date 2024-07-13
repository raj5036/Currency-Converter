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
			borderBottom: `solid 1px ${theme.palette.divider}`,
			color: theme.palette.text.primary,
			bgcolor: 'background.default',
		}
	})
}