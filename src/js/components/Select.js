import React from 'react';
import { Input } from 'reactstrap';

const Select = ({ values, onChange, fieldName }) => {
    const onSelected = (e) => onChange(values.find(v => e.target.value === v[fieldName]));
    return (
        <Input type='select' onChange={onSelected} >
            {values.map((x, i) => (<option key={i}>{x[fieldName]}</option>))}
        </Input>)
};

export default Select;
