import RowWithChildren from '../components/RowWithChildren';
import Example from '../components/Example';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import { Button } from 'reactstrap';
import React from 'react';

const Callbacks = () =>
    <Example name='Callbacks (Callbacks.js)' >
        <OrderFormV2Layout title='Callbacks (for example lambda)'>
            <RowWithChildren>
                <Button
                    color='primary'
                    onClick={() => console.log('Added new log source at', new Date())}>
                    Add new log source
                </Button>
            </RowWithChildren>
        </OrderFormV2Layout>
    </Example>;

export default Callbacks;