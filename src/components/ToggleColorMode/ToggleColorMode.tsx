import { useTheme } from "@mui/material/styles";
import React from "react";
import ColorModeContext from "../../utils/Context";
import { Box, IconButton, Typography } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ToggleColorMode = () => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<Box component={"div"} sx={{ 
			bgcolor: 'background.default',
			color: 'text.primary',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Typography variant="body1">{theme.palette.mode} mode</Typography>
			<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
				{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	)
}

export default ToggleColorMode