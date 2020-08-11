import React from 'react';
import { Col, Row } from 'reactstrap';

const RowWithChildren = ({children}) => {
    return (
        <Row>
            {React.Children.map(children, (child, i) => (
                <Col key={i} >
                    {child}
                </Col>))}
        </Row>);
};

export default RowWithChildren;