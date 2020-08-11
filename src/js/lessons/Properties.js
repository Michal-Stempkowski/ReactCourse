import Example from '../components/Example';

import MySiemOrderForm from './properties-implementation/MySiemOrderForm';

import React from 'react';

const someDataFromBackend = {
    user: {
        firstName: 'Michał',
        lastName: 'Stempkowski',
        shoeSize: 42,
        ssid: '11111111-22222222-33333333-44444444',
        email: 'michal.stempkowski@tietoevry.com'
    },
    orderedLogSources: [
        {
            dnsName: 'abc.def',
            type: 'syslog',
            eps: 55
        },
        {
            dnsName: 'ws8888888.com',
            type: 'gsys',
            eps: 4
        },
        {
            dnsName: '12.77.125.2',
            type: 'Awesome',
            eps: 1200
        }
    ]
};

const Properties = () =>
    <Example name='Properties (Properties.js)' >
        <MySiemOrderForm title='My order form (not editable yet)' siemOrder={someDataFromBackend} />
    </Example>;

export default Properties;