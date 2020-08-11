import Display from '../components/Display';
import EditableRowWithInput from '../components/EditableRowWithInput';
import Example from '../components/Example';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import React, { useState } from 'react';

const StateHookIntro = () =>
{
    const [eps, setEps] = useState(2);

    const validationFunction = (v) => {
        if (v < 1) return [false, 'Eps must be at least 1'];
        else if (v > 5) return [false, 'Eps must be at most 5'];
        return [true, ''];
    };

    return (<Example name='State Hook Intro (StateHookIntro.js)' >
        <OrderFormV2Layout title='State hook / state update (loop) / DOM update / state hoisting'>
            <EditableRowWithInput
                id='epsInput'
                label='EPS'
                type='number'
                initialValue={eps}
                onChange={(newValue) => setEps(newValue) }
                validate={validationFunction} />
            <Display label='Total eps' value={eps} />
        </OrderFormV2Layout>
    </Example>);
};


export default StateHookIntro;