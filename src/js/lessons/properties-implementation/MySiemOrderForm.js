import React from 'react';
import { Col, Jumbotron, Row } from 'reactstrap';

import UserDetails from './UserDetails';
import OrderedLogSources from './OrderedLogSources';

// const MySiemOrderForm = (siemOrder: { user, orderedLogSources }, title) => {
// const MySiemOrderForm = ({ siemOrder: { user, orderedLogSources }, title }) => {
const MySiemOrderForm = (props) => {

    const title = props.title;
    const siemOrder = props.siemOrder;
    const user = siemOrder.user;
    const orderedLogSources = siemOrder.orderedLogSources;

    // Or we could JavaScript ES6 destructuring assignment:
    // const { siemOrder: { user, orderedLogSources }, title } = props;

    // Or even destructure it in argument (also ES6 plain vanilla JS feature)
    // const MySiemOrderForm = ({ siemOrder: { user, orderedLogSources }, title }) => {

    // Do not mistake: const Properties = ({ siemOrder, title })
    // with: const Properties = ( siemOrder, title )

    return (
     <div>
        <Row>
            <Col>
                <Jumbotron>
                    <h1>
                        {title}
                    </h1>
                </Jumbotron>
            </Col>
        </Row>
        <Row className='special-child-highlight'>
            <Col>
                <UserDetails user={user} />
            </Col>
        </Row>
        <Row className='special-child-highlight'>
            <Col>
                <OrderedLogSources order={orderedLogSources} />
            </Col>
        </Row>
     </div>);
};

export default MySiemOrderForm;
