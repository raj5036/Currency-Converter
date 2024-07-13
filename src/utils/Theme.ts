import { PaletteMode } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

const Theme = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
		? {
			// palette values for light mode
			primary: amber,
			divider: grey[700],
			text: {
				primary: grey[900],
				secondary: grey[800],
			},
		}
		: {
			// palette values for dark mode
			primary: grey,
			divider: grey[300],
			background: {
				default: grey[900],
				paper: grey[900],
			},
			text: {
				primary: grey[50],
				secondary: grey[500],
			},
		}),
	},
  });

  export default Theme