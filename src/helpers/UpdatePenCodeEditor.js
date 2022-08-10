const DEFAULT_TYPES = {
	html: "html",
	css: "css",
	javascript: "javascript",
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
		<select class="btn btn-primary dropdown-toggle dropdown-toggle-split" value={value} onChange={e => onChange(e.target.value)}>
			{Object.entries(listObj).map(([value, text]) => (
				<option class="dropdown-item" value={value} key={value}>
					{text}
				</option>
			))}
		</select>
	);
};
