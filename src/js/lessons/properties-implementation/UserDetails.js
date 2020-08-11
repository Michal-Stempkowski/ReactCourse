import RowWithInput from '../../components/RowWithInput';

import React from 'react';

const UserDetails = ({user: {firstName, lastName, shoeSize, ssid, email}}) => {
    // <></> - React.Shard
    return (
     <>
        <h2>User info:</h2>
        <RowWithInput id='firstNameInput' label='First name:' value={firstName} />
        <RowWithInput id='lastNameInput' label='Last name:' value={lastName} />
        <RowWithInput id='shoeSizeInput' label='Shoe size:' value={shoeSize} type='number' />
        <RowWithInput id='ssidInput' label='SSID:' value={ssid} type='password' />
        <RowWithInput id='emailInput' label='Email:' value={email} type='email' />
     </>);
};

export default UserDetails;