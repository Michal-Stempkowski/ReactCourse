import EditableRowWithInput from '../../components/EditableRowWithInput';
import RowWithChildren from '../../components/RowWithChildren';

import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import uniqid from 'uniqid';

const toUniqueId = value => uniqid(`${value}-`);

const EditableLogSource = ({
    initialValue: {dnsName, type, eps},
    onChange = null,
    onDelete = null,
    onDuplicate = null}) => {
    const minimumEps = 1;
    const maximumEps = 1000;

    const onPropertyChange = (newValue, name) => {
        if (onChange) {
            onChange({[name]: { $set: newValue}})
        }
    }

    const onDnsNameChanged = (newValue) => onPropertyChange(newValue, 'dnsName');
    const onTypeChanged = (newValue) => onPropertyChange(newValue, 'type');
    const onEpsChanged = (newValue) => onPropertyChange(newValue, 'eps');

    return (
     <>
        <h3>Log Source:</h3>
        <EditableRowWithInput
            id={toUniqueId('dnsNameInput')}
            label='Dns name:'
            initialValue={dnsName}
            validate={v => [v && v.length > 3, 'Dns name is too short']}
            onChange={onDnsNameChanged} />

        <EditableRowWithInput
            id={toUniqueId('typeInput')}
            label='Type:'
            initialValue={type}
            validate={v => [!!v, 'Log source type is required!']}
            onChange={onTypeChanged} />

        <EditableRowWithInput
            id={toUniqueId('epsInput')}
            label='EPS:'
            initialValue={eps}
            type='number'
            validate={v => [
                v && v >= minimumEps && v <= maximumEps,
                `EPS must be between ${minimumEps} and ${maximumEps}`]}
            onChange={onEpsChanged} />

        <Row>
            <Col>
                <RowWithChildren>
                    <Button color='danger' onClick={onDelete}>Delete</Button>
                    <Button color='primary' onClick={onDuplicate}>Duplicate</Button>
                </RowWithChildren>
            </Col>
            <Col>
            </Col>
        </Row>
        
     </>);
};

export default EditableLogSource;