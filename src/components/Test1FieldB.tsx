import React from 'react';
import RoundField from './RoundField';

type Test1FieldBProps = {
	inputText: string;
	setInputText: (text: string) => void;
	generateHint: (input: string) => string;
	dispatch: React.Dispatch<any>;
};

const Test1FieldB = (props: Test1FieldBProps) => {
	const { inputText, setInputText, generateHint, dispatch } = props;
	dispatch({ type: 'test1FieldB' });
	return (
		<RoundField>
			<h5>Field B</h5>
			<input
				type="text"
				value={inputText}
				onChange={e => {
					setInputText(e.currentTarget.value);
				}}
			/>
			<div>{generateHint(inputText)}</div>
		</RoundField>
	);
};

export default Test1FieldB;
// DEMO 2
// export default React.memo(Test1FieldB);
