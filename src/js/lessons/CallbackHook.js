import EditableRowWithInput from '../components/EditableRowWithInput';
import Example from '../components/Example';
import FeedBeta from '../components/FeedBeta';
import HideWhenNotLoaded from '../components/HideWhenNotLoaded';
import Select from '../components/Select';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const CallbackHook = () =>
{
    const [isLoaded, setLoaded] = useState(false);
    const [users, setUsers] = useState(null);
    const [lastRefresh, setLastRefresh] = useState(null);

    const onLoaded = useCallback((result) => {
        setUsers(result['data']);
        setLoaded(true);
    },
    [setUsers, setLoaded]);

    const onRefresh = useCallback(() => {
        setLastRefresh(new Date());
        setLoaded(false);
    },
    [setLastRefresh, setLoaded]);

    return (<Example name='Callback Hook (CallbackHook.js)' >
        <OrderFormV2Layout title='We can use it to memoize callback object'>
            <FeedBeta url='https://reqres.in/api/users' onLoaded={onLoaded} lastInvalidation={lastRefresh} />
            <HideWhenNotLoaded isLoaded={isLoaded} size='md'>
                <Button color='primary' onClick={onRefresh}>Simple refresh</Button>
                <Select values={users} onChange={x => console.log(x)} fieldName='email' />
            </HideWhenNotLoaded>
        </OrderFormV2Layout>
    </Example>);
};


export default CallbackHook;