import React from 'react';
import { Input, Label } from 'reactstrap';

const Display = ({label, value}) => {
    return (
        <Input
            type='text'
            value={`${label}: ${value}`}
            disabled={true} />);
};

export default Display;
