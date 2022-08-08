import { useState, useEffect } from "react";

import { UpdateTheme } from "helpers/UpdateTheme";
import { UpdateFontSize } from "helpers/UpdateFontSize";

import { Editor } from "./Editor";

const baseSnippetParameters = [
	{
		type: "html",
		name: "",
		text: ``,
	},
	{
		type: "css",
		name: "",
		text: ``,
	},
	{
		type: "javascript",
		name: "",
		text: ``,
	},
];

export const Snippet = ({ onSave }) => {
	const [editors, setEditors] = useState(baseSnippetParameters);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [srcDoc, setSrcDoc] = useState("");
	const [theme, setTheme] = useState();
	const [font, setFont] = useState();

	useEffect(() => {
		const timeout = setTimeout(() => {
			const source = { html: "", css: "", javascript: "" };
			editors.forEach(({ type, text }) => (source[type] = text));
			setSrcDoc(`
            <html>
              <body>${source.html}</body>
              <style>${source.css}</style>
              <script>${source.javascript}</script>
            </html>
          `);
		}, 300);

		return () => clearTimeout(timeout);
	}, [editors]);

	return (
		<>
			<div className='styles'>

				<br />
				{"Theme: "}
				<UpdateTheme onChange={setTheme} value={theme} />
				<br />

				{"FontSize: "}
				<UpdateFontSize onChange={setFont} value={font} />
				<br />

				<button class="btn btn-outline-secondary btn-lg px-4" onClick={() => setEditors([...editors, { type: "", name: "", text: "" }])}>
					+
				</button>

				<button class="btn btn-outline-secondary btn-lg px-4" onClick={() => { editors.pop(); setEditors([...editors]); }}>
					-
				</button>
			</div>
			{editors.map((data, index) => {
				return (
					<Editor
						data={data}
						key={index}
						theme={theme}
						font={font}
						onChange={newData => {
							let editor = [...editors];
							editor.splice(index, 1, newData);
							setEditors(editor);
						}}
					/>
				);
			})}


			<div className='pane'>
				<iframe srcDoc={srcDoc} title='output' sandbox='allow-scripts' frameBorder='0' width='100%' height='100%' />
			</div>

			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Set Snippet name</label>
				<input type="email" class="form-control" placeholder='Snippet name' value={title} onChange={e => setTitle(e.target.value)} />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">Description</label>
				<textarea class="form-control" rows="1" placeholder='Add Your Description' value={description} onChange={e => setDescription(e.target.value)}></textarea>
			</div>
			<div class="col-12">
				<button class="btn btn-primary" type="submit" onClick={() => onSave(title, description, editors)}>Create snippet</button>
			</div>
		</>
	);
};
