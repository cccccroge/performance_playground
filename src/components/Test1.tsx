import React, { useState, useCallback } from 'react';
import '../stylesheets/Test1.scss';
import Test1FieldA from './Test1FieldA';
import Test1FieldB from './Test1FieldB';
import Test1FieldC from './Test1FieldC';

type Test1Props = {
	dispatch: React.Dispatch<any>;
};

const Test1 = ({ dispatch }: Test1Props) => {
	dispatch({ type: 'test1' });
	const [radioValue, setRadioValue] = useState('option1');
	const [inputText, setInputText] = useState('');
	const [selectValue, setSelectValue] = useState('');

	return (
		<div id="test1">
			<Test1FieldA
				radioValue={radioValue}
				setRadioValue={setRadioValue}
				dispatch={dispatch}
			/>
			<Test1FieldB
				inputText={inputText}
				setInputText={setInputText}
				dispatch={dispatch}
			/>
			<Test1FieldC
				selectValue={selectValue}
				setSelectValue={setSelectValue}
				dispatch={dispatch}
			/>
		</div>
	);
};

export default React.memo(Test1);
