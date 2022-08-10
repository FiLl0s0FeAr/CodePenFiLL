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
		<select class="btn btn-primary dropdown-toggle dropdown-toggle-split" value={value} onChange={e => onChange(e.target.value)}>
			{Object.entries(listObj).map(([value, text]) => (
				<option class="dropdown-item" value={value} key={value}>
					{text}
				</option>
			))}
		</select>
	);
};
