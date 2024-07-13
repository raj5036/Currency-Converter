import { Typography } from '@mui/material';
import './Header.css';

const Header = () => {
	return (
		<div className="header">
			<Typography variant="h4" marginLeft={2}>
				Currency Converter
			</Typography>
		</div>
	);
};

export default Header;