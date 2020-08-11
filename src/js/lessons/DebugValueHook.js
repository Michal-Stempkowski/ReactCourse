import Example from '../components/Example';
import HideWhenNotLoaded from '../components/HideWhenNotLoaded';
import Select from '../components/Select';
import useFeedV2 from '../components/UseFeedV2';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';

import React from 'react';
import { Button } from 'reactstrap';

const DebugValueHook = () =>
{
    const [userData, areUsersLoaded, invalidateUsers] = useFeedV2('https://reqres.in/api/users');
    const users = userData && userData['data'];

    return (<Example name='Debug Value Hook (DebugValueHook.js)' >
        <OrderFormV2Layout title='And now sth completly different'>
            <HideWhenNotLoaded isLoaded={areUsersLoaded} size='md'>
                <Button color='primary' onClick={invalidateUsers}>Simple refresh</Button>
                <Select values={users} onChange={x => console.log(x)} fieldName='email' />
            </HideWhenNotLoaded>
        </OrderFormV2Layout>
    </Example>);
};


export default DebugValueHook;