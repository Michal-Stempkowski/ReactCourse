import Display from '../../components/Display';
import EditableRowWithInput from '../../components/EditableRowWithInput';

import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';

import React, { useCallback, useMemo, useState } from 'react';
import { Button } from 'reactstrap';

const MemoizingBrowser = () =>
{
    const [targetUrl, setTargetUrl] = useState('https://reqres.in/api/users/2');
    const [content, setContent] = useState(null);
    
    const expensiveContentFormatting = useMemo(() => {
        console.log(`performing extensive calculations for content ${content}`);
        return JSON.stringify(content);
     },
     [content && content.id]);

    const reloadContent = useCallback(() => {
        fetch(targetUrl)
            .then(response => response.json())
            .then(
                (result) => {
                    setContent(result["data"])
                });
    },
    [targetUrl, setContent]);

    return (<OrderFormV2Layout title='We can use memo hook to cache some values which continues calculations impact performance'>
        <EditableRowWithInput id='targetUrl' label='Target url' initialValue={targetUrl} onChange={v => setTargetUrl(v)} />
        <Button color='primary' onClick={reloadContent}>Reload content</Button>
        <Display label='Response' value={expensiveContentFormatting} />
    </OrderFormV2Layout>);
};


export default MemoizingBrowser;