import React from 'react';
import { Col, Jumbotron, Row } from 'reactstrap';

const OrderFormV2Layout = ({children, title}) => {
    return (
     <>
        <Row>
            <Col>
                <Jumbotron>
                    <h1>
                        {title}
                    </h1>
                </Jumbotron>
            </Col>
        </Row>
        {/*children.map((child, i) => (
            <Row key={i} className='special-child-highlight'>
                <Col>
                    {child}
                </Col>
            </Row>))*/}
        {React.Children.map(children, (child, i) => (
            <Row key={i} className='special-child-highlight'>
                <Col>
                    {child}
                </Col>
            </Row>))}
     </>);
};

export default OrderFormV2Layout;