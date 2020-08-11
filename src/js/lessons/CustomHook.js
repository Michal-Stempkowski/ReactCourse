import Example from '../components/Example';

import CustomHookComponent from './custom-hook-implementation/CustomHookComponent';

import React from 'react';

const CustomHook = () =>
{
    return (<Example name='Custom Hook (CustomHook.js)' >
        <CustomHookComponent />
    </Example>);
};


export default CustomHook;