import { Container } from "@mui/material";
import {styled} from "@mui/material/styles";

export const AppStyles = {
	Container: styled(Container)(({ theme }) => ({
		bgcolor: theme.palette.background.default,
		color: theme.palette.text.primary,
		marginTop: '6rem',
	}))
}