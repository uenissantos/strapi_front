import React from "react";
import Home from './Home';
import { renderTheme } from '../../components/style/render_theme';
import { getByTestId, screen } from "@testing-library/react";

describe('<home/>', () => {

	it("renders without crashing", () => {

		const { debug } = renderTheme(<Home />,);
		const teste = expect(screen.getByText("ola"));
	});


});




