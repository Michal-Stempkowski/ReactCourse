import Example from '../components/Example';

import MemoizingBrowser from './memo-hook-implementation/MemoizingBrowser';

import React from 'react';

const MemoHook = () =>
{
    return (<Example name='Memo Hook (MemoHook.js)' >
        <MemoizingBrowser />
    </Example>);
};


export default MemoHook;