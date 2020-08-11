import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';
import StyledButton from './StyledButton';

import React from 'react';

const StyledComponent = ({title}) =>
{
    return (
        <OrderFormV2Layout title={title} >
            <StyledButton name="Button 1" />
            <StyledButton name="Button 2" />
        </OrderFormV2Layout>);
};


export default StyledComponent;