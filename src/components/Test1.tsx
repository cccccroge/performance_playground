import React, { useState } from 'react';
import RoundField from './RoundField';
import '../stylesheets/Test1.scss';

const Test1 = () => {
	const [radioValue, setRadioValue] = useState('option1');
	const [inputText, setInputText] = useState('');
	const [selectValue, setSelectValue] = useState('');

	return (
		<div id="test1">
			<RoundField>
				<h5>Field A</h5>
				<input
					type="radio"
					value="option1"
					id="option1"
					checked={radioValue === 'option1'}
					onClick={() => setRadioValue('option1')}
				/>
				<label htmlFor="option1">option1</label>
				<input
					type="radio"
					value="option2"
					id="option2"
					checked={radioValue === 'option2'}
					onClick={() => setRadioValue('option2')}
				/>
				<label htmlFor="option2">option2</label>
			</RoundField>
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
			<RoundField>
				<h5>Field C</h5>
				<select
					value={selectValue}
					onChange={e => setSelectValue(e.currentTarget.value)}
				>
					<option value="option3">option3</option>
					<option value="option4">option4</option>
					<option value="option5">option5</option>
				</select>
			</RoundField>
		</div>
	);
};

export default Test1;
