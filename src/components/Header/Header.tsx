import { Typography } from '@mui/material';
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode';
import { HeaderStyles } from './HeaderStyles';

const Header = () => {
	return (
		<HeaderStyles.Box>
			<Typography variant="h4" marginLeft={2}>
				Currency Converter
			</Typography>
			<ToggleColorMode />
		</HeaderStyles.Box>
	);
};

export default Header;