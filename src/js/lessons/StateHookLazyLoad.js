import Example from '../components/Example';

import ComponentWithExtensiveCalculations from './state-hook-lazy-load-implementation/ComponentWithExtensiveCalculations';

import React from 'react';

const StateHookLazyLoad = () =>
{
    return (<Example name='State Hook Lazy Load (StateHookLazyLoad.js)' >
        <ComponentWithExtensiveCalculations />
    </Example>);
};


export default StateHookLazyLoad;