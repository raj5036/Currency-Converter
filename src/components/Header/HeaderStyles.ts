import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderStyles = {
	Box: styled(Box)(({ theme }) => {
		return {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: theme.spacing(8),
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.background.default,
			zIndex: 1,
		}
	}),
	AppNameContainer: styled(Box)(({ theme }) => {
		return {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: theme.spacing(3),

			[theme.breakpoints.down('sm')]: {
				marginLeft: theme.spacing(2),
			}
		}
	}),
	AppName: styled(Typography)(({ theme }) => {
		return {
			color: theme.palette.text.info,
			fontSize: theme.typography.h6.fontSize,
			marginLeft: theme.spacing(2),

			[theme.breakpoints.down('sm')]: {
				fontSize: theme.typography.body1.fontSize,
				marginLeft: theme.spacing(1),
			}
		}
	}),
}