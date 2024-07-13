import { useTheme } from "@mui/material/styles";
import React from "react";
import ColorModeContext from "../../utils/Context";
import { IconButton, Typography } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CapitalizeString } from "../../utils/Functions";
import { ToggleColorModeStyles } from "./ToggleColorModeStyles";

const ToggleColorMode = () => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<ToggleColorModeStyles.Box>
			<Typography variant="body1">{CapitalizeString(theme.palette.mode)} mode</Typography>
			<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
				{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</ToggleColorModeStyles.Box>
	)
}

export default ToggleColorMode