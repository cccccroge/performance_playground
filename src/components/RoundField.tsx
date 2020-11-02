import React from 'react';
import '../stylesheets/RoundField.scss';

type RoundFieldProps = {
  children: React.ReactNode;
};

const RoundField = (props: RoundFieldProps) => {
  return (<div className='round-field'>
    {props.children}
  </div>);
};

export default RoundField;
