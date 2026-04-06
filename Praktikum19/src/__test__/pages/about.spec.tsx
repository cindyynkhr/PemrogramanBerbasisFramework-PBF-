import {render} from "@testing-library/react";
import About from "../../pages/about";

describe("About", () => {
    it("renders the about page correctly", () => {
        const page = render(<About />);
        expect(page).toMatchSnapshot();
    });
});