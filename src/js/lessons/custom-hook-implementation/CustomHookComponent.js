import HideWhenNotLoaded from '../../components/HideWhenNotLoaded';
import Select from '../../components/Select';
import useFeed from '../../components/UseFeed';

import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';

import React from 'react';
import { Button } from 'reactstrap';

const CustomHookComponent = () =>
{
    const [userData, areUsersLoaded, invalidateUsers] = useFeed('https://reqres.in/api/users');
    const users = userData && userData['data'];

    return (<OrderFormV2Layout title='Great way to extract parts of logic'>
        <HideWhenNotLoaded isLoaded={areUsersLoaded} size='md'>
            <Button color='primary' onClick={invalidateUsers}>Simple refresh</Button>
            <Select values={users} onChange={x => console.log(x)} fieldName='email' />
        </HideWhenNotLoaded>
    </OrderFormV2Layout>);
};


export default CustomHookComponent;