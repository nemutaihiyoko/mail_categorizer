import PageTitleText from '../../../components/text/custom/PageTitleText'
import SmallText from '../../../components/text/common/SmallText'
import Button from '../../../components/button/common/Button'
import { useNavigate } from 'react-router-dom'

export default function SampleDetailPage() {
    const navigate = useNavigate()

    return (
        <div>
            <PageTitleText>Sample Detail</PageTitleText>
            <SmallText>これは `/sample/detail` の深い階層ルートです。</SmallText>
            <div style={{ marginTop: '24px' }}>
                <Button onClick={() => navigate('/sample')}>
                    <SmallText>Sample に戻る</SmallText>
                </Button>
            </div>
        </div>
    )
}
