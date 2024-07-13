/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import styled from "styled-components";

export const ToggleColorModeStyles = {
	Box: styled(Box)(({ theme }) => ({
		bgcolor: 'background.default',
		color: 'text.primary',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}))
}