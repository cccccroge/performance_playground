import React from 'react';
import RoundField from './RoundField';

type Test1FieldAProps = {
  radioValue: string;
  setRadioValue: (val: string) => void;
  dispatch: React.Dispatch<any>;
};

const Test1FieldA = (props: Test1FieldAProps) => {
  const { radioValue, setRadioValue, dispatch } = props;
  dispatch({ type: 'test1FieldA' });
	return (
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
	);
};

export default Test1FieldA;
