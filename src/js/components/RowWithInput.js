import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const RowWithInput = ({id, label, value, type='text'}) => {
    return (
        <Row>
            <Col>
                <Label for={id}>
                    {label}
                </Label>
            </Col>
            <Col>
                <Input type={type} id={id} value={value} onChange={()=>{}}/>
            </Col>
        </Row>);
};

export default RowWithInput;
