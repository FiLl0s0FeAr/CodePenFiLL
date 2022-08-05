const DEFAULT_THEMES = {
	textmate: "textmate",
	monokai: "monokai",
	xcode: "xcode",
	terminal: "terminal",
	github: "github",
	solarized_dark: "solarized_dark",
};

export const UpdateTheme = ({ listObj = DEFAULT_THEMES, onChange, value }) => {
	return (
		<select value={value} onChange={e => onChange(e.target.value)}>
			{Object.entries(listObj).map(([value, text]) => (
				<option value={value} key={value}>
					{text}
				</option>
			))}
		</select>
	);
};
