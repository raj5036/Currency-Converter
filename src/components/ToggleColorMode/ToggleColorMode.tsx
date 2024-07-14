import { useTheme } from "@mui/material/styles";
import React from "react";
import ColorModeContext from "../../utils/Context";
import { IconButton, Typography } from "@mui/material";
import { CapitalizeString } from "../../utils/Functions";
import { ToggleColorModeStyles } from "./ToggleColorModeStyles";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const ToggleColorMode = () => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<ToggleColorModeStyles.Box>
			<Typography variant="body1">{CapitalizeString(theme.palette.mode)}</Typography>
			<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
				{theme.palette.mode === 'dark' 
				? <NightsStayIcon color="info"/> 
				: <WbSunnyIcon color="warning"/>}
			</IconButton>
		</ToggleColorModeStyles.Box>
	)
}

export default ToggleColorMode