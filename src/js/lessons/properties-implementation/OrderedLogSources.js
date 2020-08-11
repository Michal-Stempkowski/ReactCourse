import React from 'react';
import { Col, Jumbotron, Row } from 'reactstrap';

import LogSource from './LogSource';

const OrderedLogSources = ({order}) => {
    return (
     <div>
        <Row>
            <Col>
                <h2>
                    Ordered log sources:
                </h2>
            </Col>
        </Row>
        <Row>
            <Col>
                {order.map((logSource, i) => (<LogSource key={i} value={logSource} />))}
            </Col>
        </Row>
     </div>);
};

export default OrderedLogSources;
