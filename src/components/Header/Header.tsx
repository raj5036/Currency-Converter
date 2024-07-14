import { Typography } from '@mui/material';
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode';
import { HeaderStyles } from './HeaderStyles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useTheme } from '@mui/material/styles';

const Header = () => {
	const theme = useTheme()
	
	return (
		<HeaderStyles.Box>
			<HeaderStyles.AppNameContainer>
				<CurrencyExchangeIcon 
					color={theme.palette.mode === 'dark' ? 'info' : 'warning'}
					fontSize='large'
				/>
				<Typography variant="h4" marginLeft={2}>
					Currency Converter
				</Typography>
			</HeaderStyles.AppNameContainer>
			<ToggleColorMode />
		</HeaderStyles.Box>
	);
};

export default Header;