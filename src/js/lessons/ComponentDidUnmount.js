import EditableRowWithInput from '../components/EditableRowWithInput';
import Example from '../components/Example';
import FeedAlpha from '../components/FeedAlpha';
import HideWhenNotLoaded from '../components/HideWhenNotLoaded';
import Select from '../components/Select';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import UnmountExample from './component-did-unmount-implementation/UnmountExample';

import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const ComponentDidUnmount = () =>
{
    return (<Example name='Component did unmount (ComponentDidUnmount.js)' >
        <OrderFormV2Layout title='You can return callback in order to run cleanup on unmount (or before next useEffect invocation)'>
            <UnmountExample />
        </OrderFormV2Layout>
    </Example>);
};


export default ComponentDidUnmount;