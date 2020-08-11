import Display from '../components/Display';
import Example from '../components/Example';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import React, { useRef } from 'react';
import { Button } from 'reactstrap';

const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

const RefHook = () =>
{
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const invalidRef = useRef(null);

    //<OrderFormV2Layout title='Use refs to access DOM object' ref={invalidRef} >
    return (
        <Example name='Ref Hook (RefHook.js)' >
            <OrderFormV2Layout title='Use refs to access DOM object' >
                <div ref={topRef}>
                    <Button color='primary' onClick={() => scrollToRef(bottomRef)} >Go to bottom</Button>
                </div>

                {[...Array(100)].map((_, i) => (<Display key={i} label='Display' value={i} />))}

                <Button color='primary' innerRef={bottomRef} onClick={() => scrollToRef(topRef)} >Go to top</Button>
                <Button color='primary' onClick={() => scrollToRef(invalidRef)} >Go to bad place</Button>
            </OrderFormV2Layout>
        </Example>);
};


export default RefHook;