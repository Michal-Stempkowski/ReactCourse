import RowWithInput from '../../components/RowWithInput';

import React from 'react';
import uniqid from 'uniqid';

const toUniqueId = value => uniqid(`${value}-`);

const LogSource = ({value: {dnsName, type, eps}}) => {
    return (
     <>
        <h3>Log Source:</h3>
        <RowWithInput id={toUniqueId('dnsNameInput')} label='Dns name:' value={dnsName} />
        <RowWithInput id={toUniqueId('typeInput')} label='Type:' value={type} />
        <RowWithInput id={toUniqueId('epsInput')} label='EPS:' value={eps} type='number' />
     </>);
};

export default LogSource;