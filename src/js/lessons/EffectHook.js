import EditableRowWithInput from '../components/EditableRowWithInput';
import Example from '../components/Example';
import FeedAlpha from '../components/FeedAlpha';
import HideWhenNotLoaded from '../components/HideWhenNotLoaded';
import Select from '../components/Select';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const EffectHook = () =>
{
    const [isLoaded, setLoaded] = useState(false);
    const [users, setUsers] = useState(null);
    const [lastRefresh, setLastRefresh] = useState(null);

    const onLoaded = (result) => {
        setUsers(result['data']);
        setLoaded(true);
    };

    const onRefresh = () => {
        setLastRefresh(new Date());
        setLoaded(false);
    }

    return (<Example name='Effect Hook (EffectHook.js)' >
        <OrderFormV2Layout title='So we can use useEffect to deal with side effects while tracking their dependencies'>
            <FeedAlpha url='https://reqres.in/api/users' onLoaded={onLoaded} lastInvalidation={lastRefresh} />
            <HideWhenNotLoaded isLoaded={isLoaded} size='md'>
                <Button color='primary' onClick={onRefresh}>Simple refresh</Button>
                <Select values={users} onChange={x => console.log(x)} fieldName='email' />
            </HideWhenNotLoaded>
        </OrderFormV2Layout>
    </Example>);
};


export default EffectHook;