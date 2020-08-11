import React from 'react';
import { Col, Jumbotron, Row } from 'reactstrap';

import OrderFormV2Layout from './OrderFormV2Layout';

import UserDetails from '../properties-implementation/UserDetails';
import OrderedLogSources from '../properties-implementation/OrderedLogSources';

const MySiemOrderFormV2 = ({ siemOrder: { user, orderedLogSources }, title }) => {
    return (
        <OrderFormV2Layout title={title} >
            <UserDetails user={user} />
            <OrderedLogSources order={orderedLogSources} />
        </OrderFormV2Layout>);
};

export default MySiemOrderFormV2;
