import React from 'react';
import { Col, Jumbotron, Row } from 'reactstrap';

const OrderFormV3Layout = ({ children, title}, ref ) => {
    return (
     <>
        <Row>
            <Col>
                <Jumbotron>
                    <h1 ref={ref} >
                        {title}
                    </h1>
                </Jumbotron>
            </Col>
        </Row>
        {React.Children.map(children, (child, i) => (
            <Row key={i} className='special-child-highlight'>
                <Col>
                    {child}
                </Col>
            </Row>))}
     </>);
};

export default React.forwardRef(OrderFormV3Layout);