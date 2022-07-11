import React from "react";
import ReactDOM from "react-dom";
import Home from "./tamplates/app/Home";
import { ThemeProvider } from "styled-components"
import { theme } from "./components/theme";
import { GlobalStyles } from './components/style/global_style'

ReactDOM.render(

	<ThemeProvider theme={theme}>


		<Home />
		<GlobalStyles />


	</ThemeProvider>,

	document.getElementById("root")
);
