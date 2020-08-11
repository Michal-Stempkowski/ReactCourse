import EditableRowWithInput from '../components/EditableRowWithInput';
import Example from '../components/Example';
import FeedAlpha from '../components/FeedAlpha';
import HideWhenNotLoaded from '../components/HideWhenNotLoaded';
import Select from '../components/Select';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import RemoteUserDisplay from './effect-hook-intro-implementation/RemoteUserDisplay';

import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const EffectHookIntro = () =>
{
    return (<Example name='Effect Hook Intro (EffectHookIntro.js)' >
        <OrderFormV2Layout title='Now we are free to use our side effects'>
            <RemoteUserDisplay />
        </OrderFormV2Layout>
    </Example>);
};


export default EffectHookIntro;