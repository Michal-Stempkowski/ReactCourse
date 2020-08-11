import Display from '../../components/Display';
import EditableRowWithInput from '../../components/EditableRowWithInput';
import RowWithChildren from '../../components/RowWithChildren';

import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import uniqid from 'uniqid';

const RenderNotifier = () =>
{
    const [eps, setEps] = useState(2);
    const [renderCalls, setRenderCalls] = useState(0);

    // setRenderCalls(renderCalls + 1);
    // const message = `Render called ${renderCalls} times!`;
    // console.log(message);

    console.log('Render called at', new Date());

    const validationFunction = (v) => {
        if (v < 1) return [false, 'Eps must be at least 1'];
        else if (v > 5) return [false, 'Eps must be at most 5'];
        return [true, ''];
    };

    return (<OrderFormV2Layout title='Once per trackable change (though our current tracking method is not so good)'>
        <EditableRowWithInput
            id='epsInput'
            label='EPS'
            type='number'
            initialValue={eps}
            onChange={(newValue) => setEps(newValue) }
            validate={validationFunction} />
        <EditableRowWithInput
            id='childNotInpactingFather'
            label='Child not impacting father'
            type='number'
            initialValue={4}
            validate={validationFunction} />
        <Display label='Total eps' value={eps} />
        <Button color='primary' onClick={() => console.log('pointless button called')}>Pointless button</Button>
    </OrderFormV2Layout>);
};


export default RenderNotifier;