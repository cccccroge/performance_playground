import React, { useMemo } from 'react';
import RoundField from './RoundField';

type Test1FieldCProps = {
	selectValue: number;
	selectColor: string;
	setSelectValue: (val: number) => void;
	setSelectColor: (col: string) => void;
	dispatch: React.Dispatch<any>;
};

const Test1FieldC = (props: Test1FieldCProps) => {
	const {
		selectValue,
		selectColor,
		setSelectValue,
		setSelectColor,
		dispatch,
	} = props;
	dispatch({ type: 'test1FieldC' });

	function Fib(n: number) {
		let [a, b] = [0, 1];
		while (n-- > 0) {
			[a, b] = [b, a + b];
		}
		let k = 10e+8;
		while (k--) {}
		return b;
	}

	// DEMO 3
	// const FibVal = useMemo(() => {
	// 	let n = selectValue
	// 	let [a, b] = [0, 1];
	// 	while (n-- > 0) {
	// 		[a, b] = [b, a + b];
	// 	}
	// 	let k = 10e+8;
	// 	while (k--) {}
	// 	return b;
	// }, [selectValue]);

	return (
		<RoundField>
			<h5>Field C</h5>
			<span>Fibonacii of </span>
			<select
				value={selectValue}
				onChange={e => setSelectValue(Number(e.currentTarget.value))}
			>
				<option value={100}>100</option>
				<option value={1000}>1000</option>
				<option value={1000000}>1000000</option>
			</select>
			<span> = {Fib(selectValue)}</span>
			<br />
			<select
				value={selectColor}
				onChange={e => setSelectColor(e.currentTarget.value)}
			>
				<option value={'red'}>red</option>
				<option value={'yellow'}>yellow</option>
				<option value={'blue'}>blue</option>
			</select>
		</RoundField>
	);
};

export default Test1FieldC;
