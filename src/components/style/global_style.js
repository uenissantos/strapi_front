
import { createGlobalStyle, css } from "styled-components";


export const GlobalStyles = createGlobalStyle`

	* {
	margin: 0;
	padding: 0;
	color: yellow ;


}

body{

${(props) => css`

background: ${props.theme.colors.mainBg};


`}


}


`
	;
