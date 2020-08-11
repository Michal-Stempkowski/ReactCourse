import React, { useState } from 'react';
import { Col, FormFeedback, Input, Label, Row } from 'reactstrap';

const EditableRowWithInput = ({id, label, type='text', initialValue='', onChange=null, validate=null}) => {
    const [value, setValue] = useState(initialValue);

    const performValidation = (v, validator) => {
        const result = validator(v);
        return [result[0] === true, result[1]];
    };

    const [initialIsValid, initialValidationMessage] = validate === null ? [true, ''] : validate(initialValue);
    const [isValid, setIsValid] = useState(initialIsValid);
    const [validationMessage, setValidationMessage] = useState(initialValidationMessage);
    const [isChanged, setIsChanged] = useState(false);

    const inputChanged = e => {
        const newValue = e.target.value;
        setValue(newValue);

        let newValidationMessage = validationMessage;
        let newIsValid = isValid;
        if (validate) {
            [newIsValid, newValidationMessage] = performValidation(newValue, validate);

            setIsValid(newIsValid);
            setValidationMessage(newValidationMessage);
        }

        setIsChanged(true);
        if (onChange) {
            onChange(newValue, newIsValid, newValidationMessage);
        }
    };
    return (
        <Row>
            <Col>
                <Label for={id}>
                    {label}
                </Label>
            </Col>
            <Col>
                <Input
                    type={type}
                    id={id}
                    value={value}
                    onChange={inputChanged}
                    valid={isChanged && isValid === true}
                    invalid={isChanged && isValid === false} />
                <FormFeedback>{validationMessage}</FormFeedback>
            </Col>
        </Row>);
};

export default EditableRowWithInput;
