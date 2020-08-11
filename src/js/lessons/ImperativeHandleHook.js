import Display from '../components/Display';
import Example from '../components/Example';
import FancyRowWithInput from '../components/FancyRowWithInput';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import React, { useRef } from 'react';
import { Button } from 'reactstrap';

const ImperativeHandleHook = () =>
{
    const childRef = useRef(null);

    return (
        <Example name='Imperative Handle Hook (ImperativeHandleHook.js)' >
            <OrderFormV2Layout title='We can customize reference that is being exposed to parent' >
                <Button color='primary' onClick={() => childRef.current.focus()} >Focus</Button>
                <Button color='primary' onClick={() => childRef.current.clearAndFocus()} >Focus and clear</Button>
                <FancyRowWithInput id='fancyInput' label='Enter your input here' initialValue='some initial value' ref={childRef} />
            </OrderFormV2Layout>
        </Example>);
};


export default ImperativeHandleHook;