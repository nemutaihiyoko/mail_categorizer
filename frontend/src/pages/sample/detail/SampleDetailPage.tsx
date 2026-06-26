import PageTitleText from '../../../components/text/custom/PageTitleText'
import SmallText from '../../../components/text/common/SmallText'
import Button from '../../../components/button/common/Button'
import { useNavigate } from 'react-router-dom'
import Content from '../../../components/global/content/Content'

export default function SampleDetailPage() {
    const navigate = useNavigate()

    return (
        <Content>
            <PageTitleText>Sample Detail</PageTitleText>
            <SmallText>これは `/sample/detail` の深い階層ルートです。</SmallText>
            <div style={{ marginTop: '24px' }}>
                <Button onClick={() => navigate('/sample')}>
                    <SmallText>Sample に戻る</SmallText>
                </Button>
            </div>
        </Content>
    )
}
