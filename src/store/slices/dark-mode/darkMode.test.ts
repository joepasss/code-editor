import { darkModeReducer, toggleDarkMode } from "./darkMode";

describe("dark mode reducer", () => {
	it("should enable the dark mode it is disabled", () => {
		expect(darkModeReducer(false, toggleDarkMode)).toEqual(true);
	});

	it("should enable the dark mode it is enabled", () => {
		expect(darkModeReducer(true, toggleDarkMode)).toEqual(false);
	});
});
