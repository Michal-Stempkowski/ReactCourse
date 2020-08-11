import Display from '../components/Display';
import Example from '../components/Example';

import OrderFormV3Layout from './ref-hook-and-ref-forwarding-implementation/OrderFormV3Layout';

import React, { useRef } from 'react';
import { Button } from 'reactstrap';

const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

const RefHookAndRefForwarding = () =>
{
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const headerRef = useRef(null);

    return (
        <Example name='Ref Hook and Ref Forwarding (RefHookAndRefForwarding.js)' >
            <OrderFormV3Layout title='We can use ref forwarding to bind refs to underlying DOM object' ref={headerRef} >
                <div ref={topRef}>
                    <Button color='primary' onClick={() => scrollToRef(bottomRef)} >Go to bottom</Button>
                </div>

                {[...Array(100)].map((_, i) => (<Display key={i} label='Display' value={i} />))}

                <Button color='primary' innerRef={bottomRef} onClick={() => scrollToRef(topRef)} >Go to top</Button>
                <Button color='primary' onClick={() => scrollToRef(headerRef)} >Go to header</Button>
            </OrderFormV3Layout>
        </Example>);
};


export default RefHookAndRefForwarding;