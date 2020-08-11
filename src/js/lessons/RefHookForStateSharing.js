import Example from '../components/Example';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import React, { useCallback, useRef, useState } from 'react';
import { Button } from 'reactstrap';

const RefHookForStateSharing = () =>
{
    const counter = useRef(0);
    const [lastRender, setLastRender] = useState(new Date());

    const increaseCounter = useCallback(
        () => {
            counter.current += 1;
            console.log(counter.current);
        },
        [counter]);

    const forceRerender = useCallback(
        () => {
            setLastRender(new Date());
        },
        [setLastRender]);

    return (
        <Example name='Ref Hook for State Sharing (RefHookForStateSharing.js)' >
            <OrderFormV2Layout title='You can share state without triggering rerender' >
                <Button color='primary' onClick={increaseCounter} >Counter: {counter.current}</Button>
                <Button color='primary' onClick={increaseCounter} >Counter clone: {counter.current}</Button>
                <Button color='primary' onClick={forceRerender} >Force rerender</Button>
            </OrderFormV2Layout>
        </Example>);
};


export default RefHookForStateSharing;