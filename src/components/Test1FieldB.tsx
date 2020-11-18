import React from 'react';
import RoundField from './RoundField';

type Test1FieldBProps ={
  inputText: string;
	setInputText: (text: string) => void;
	dispatch: React.Dispatch<any>;
};

const Test1FieldB = (props: Test1FieldBProps) => {
	const { inputText, setInputText, dispatch } = props; 
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
		</RoundField>
	);
};

export default Test1FieldB;
