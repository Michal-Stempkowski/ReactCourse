import Display from '../../components/Display';

import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const RemoteUserDisplay = ({}) =>
{
    const [users, setUsers] = useState(null);

    useEffect(
        () => {
            console.log('in useEffect');
            const url = 'https://reqres.in/api/users';

            if (users !== null) return;
            console.log("fetching data from", url);
            fetch(url)
                .then(response => response.json())
                .then(
                    (result) => {
                        setUsers(result['data']);
                        console.log("data fetched from", url);
                    });
        });

    return (<>
        {(users && users.map((u, i) => <Display key={i} label={i} value={u['email']} />))}
    </>);
};


export default RemoteUserDisplay;