import { Typography } from '@mui/material';
import './Header.css';
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode';

const Header = () => {
	return (
		<div className="header">
			<Typography variant="h4" marginLeft={2}>
				Currency Converter
			</Typography>
			<ToggleColorMode />
		</div>
	);
};

export default Header;