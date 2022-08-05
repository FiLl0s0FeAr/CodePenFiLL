import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";

import { SelectEditor } from "helpers/UpdatePenCodeEditor";

import "../styles/Editor.css";

export const Editor = ({ data = { type: "", name: "", text: "", index: "" }, onChange, theme, font }) => {
	return (
		<div className='all_editors'> {"Editor: "} <SelectEditor onChange={type => onChange({ type, text: data.text, name: data.name })} value={data.type} />
			<br />
			{"Name of editor: "}
			<input placeholder='Enter a name for your editor' type='text' value={data.name} onChange={e => onChange({ type: data.type, text: data.text, name: e.target.value })}/>

			<AceEditor
				className='editor'
				value={data.text}
				onChange={text => onChange({ type: data.type, text, name: data.name })}
				placeholder='Enter some code'
				mode={data.type}
				name={data.name}
				theme={theme}
				fontSize={Number(font)}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				setOptions={{
					enableBasicAutocompletion: true,
					enableLiveAutocompletion: true,
					enableSnippets: true,
					showLineNumbers: true,
					tabSize: 2,
				}}
			/>
		</div>
	);
};
