import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { actGetSnipperById } from "store/actions/search/actGetSnipperById";
import { Editor } from "components/Editor";
import "../styles/Snippet.css";
import Header from "../components/Header"

const SeachSnippet = ({
	getSnippet,
	match: {
		params: { id },
	},
	titleText,
	descriptionText,
	filesArr,
}) => {
	useEffect(() => {
		getSnippet(id);
	}, [id, getSnippet]);

	const [files, setFiles] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		setFiles(filesArr);
		setTitle(titleText);
		setDescription(descriptionText);
	}, [filesArr, titleText, descriptionText]);

	const [srcDoc, setSrcDoc] = useState("");

	const html = files?.filter(e => e?.type === "html")[0]?.text;
	const css = files?.filter(e => e?.type === "css")[0]?.text;
	const javascript = files?.filter(e => e?.type === "javascript")[0]?.text;

	console.log(javascript);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${javascript}</script>
            </html>
          `);
		}, 250);

		return () => clearTimeout(timeout);
	}, [html, css, javascript]);

	return (
		<>
			<Header/>
			<div>
				<p className='text'>Snippet name: </p>
					<input className='input_snippet_name' placeholder='Set snippet Name' value={title} onChange={e => setTitle(e.target.value)}/>
				</div>
				<p className='text'>Description: </p>
				<textarea className='textarea_snippet_description' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} style={{ marginBottom: 50 }}/>
			<br />
			{files?.map((data, index) => (
				<>
					<Editor
						data={data}
						onChange={({ type, name, text }) =>
							setFiles([...files.slice(0, index), { type, name, text }, ...files.slice(index, 1)])
						}
					/>
				</>
			))}
			<br />
			<div>
				<div>
					<iframe
						className='pane'
						srcDoc={srcDoc}
						title='output'
						sandbox='allow-scripts'
						frameBorder='0'
						style={{ marginTop: 20 }}
						width='95%'
						height='95%'
					/>
				</div>
			</div>
		</>
	);
};

const ConnectedSearchSnippet = connect(
	state => ({
		titleText: state?.promise?.findSnippetById?.payload?.data?.SnippetFind?.[0]?.title,
		descriptionText: state?.promise?.findSnippetById?.payload?.data?.SnippetFind?.[0]?.description,
		filesArr: state?.promise?.findSnippetById?.payload?.data?.SnippetFind?.[0]?.files,
	}),	{ getSnippet: actGetSnipperById },)
	(SeachSnippet);

export default ConnectedSearchSnippet;
