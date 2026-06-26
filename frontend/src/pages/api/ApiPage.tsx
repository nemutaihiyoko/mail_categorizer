import PageTitleText from '../../components/text/custom/PageTitleText'
import Content from '../../components/global/content/Content'
import Button from '../../components/button/common/Button'
import { useState } from 'react'


export default function SamplePage() {
    const [result, setResult] = useState<string>('');

    const onClickSample = async () => {
        const response = await fetch('http://localhost:8000/api/sample');
        const data = await response.json();
        console.log(JSON.stringify(data));
        setResult(data.message);
    }


    return (
        <Content>
            <PageTitleText>APIページ</PageTitleText>
            <Button onClick={onClickSample}>/sample を叩く</Button>
            <div style={{ height: '16px' }} />
            <div style={{ padding: '16px', minWidth: '500px', minHeight: '200px', border: '1px solid #bbb', borderRadius: '8px' }}>
                {result}
            </div>
            <div style={{ height: '16px' }} />
            <Button onClick={() => setResult('')}>削除</Button>
        </Content>
    )
}

