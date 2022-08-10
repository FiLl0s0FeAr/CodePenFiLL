const DEFAULT_FRONTS = {
	12: 12,
	16: 16,
	20: 20,
	28: 28,
	32: 32,
	40: 40,
};

export const UpdateFontSize = ({ listObj = DEFAULT_FRONTS, onChange, value }) => {
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
