import React from 'react';
import RoundField from './RoundField';

type Test1FieldCProps = {
  selectValue: string;
	setSelectValue: (val: string) => void;
	dispatch: React.Dispatch<any>;
};

const Test1FieldC = (props: Test1FieldCProps) => {
	const { selectValue, setSelectValue, dispatch } = props;
	dispatch({ type: 'test1FieldC' });
	return (
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
	);
};

export default Test1FieldC;
