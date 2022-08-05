const DEFAULT_TYPES = {
	html: "html",
	css: "css",
	javascript: "js",
	java: "java",
	python: "python",
	xml: "xml",
	json: "json",
	typescript: "typescript",
	markdown: "markdown",
	mysql: "mysql",
};

export const SelectEditor = ({ listObj = DEFAULT_TYPES, onChange, value }) => {
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
