import EditableRowWithInput from '../../components/EditableRowWithInput';

import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';

import React, { useState } from 'react';


const expensiveCalculations = () => {
    console.log('I am doing extensive calculations here...');
    console.log('working hard...')
    return "extensive calculations";
};

const StateHookLazyLoad = () =>
{
    const [calculationResult, setCalculationResult] = useState(expensiveCalculations);
    // const [calculationResult, setCalculationResult] = useState(expensiveCalculations());

    const [isCalculated, setCalculated] = useState(false);

    const onClick = () => {
        setCalculated(!isCalculated);
    };

    return (<OrderFormV2Layout title='Why to recalculate something on render that is expensive if used as initializer only'>
        <EditableRowWithInput
                id='calculationResult'
                label='This is current calculation result'
                initialValue={calculationResult}
                onChange={(newValue) => setCalculationResult(newValue) } />
    </OrderFormV2Layout>);
};


export default StateHookLazyLoad;