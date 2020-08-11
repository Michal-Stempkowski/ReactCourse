import Display from '../components/Display';
import EditableRowWithInput from '../components/EditableRowWithInput';
import Example from '../components/Example';
import RowWithChildren from '../components/RowWithChildren';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';
import RenderNotifier from './how-often-is-render-called-implementation/RenderNotifier'

import React from 'react';

const HowOftenIsRenderCalled = () =>
{
    return (<Example name='How Often Is Render Called? (HowOftenIsRenderCalled.js)' >
        <RenderNotifier />
    </Example>);
};


export default HowOftenIsRenderCalled;