import PageTitleText from '../components/text/custom/PageTitleText'
import SmallText from '../components/text/common/SmallText'
import Button from '../components/button/common/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <div>
            <PageTitleText>ページが見つかりません</PageTitleText>
            <SmallText>指定されたパスは存在しません。 `/` か `/sample` をお試しください。</SmallText>
            <div style={{ marginTop: '24px' }}>
                <Button onClick={() => navigate('/')}>
                    <SmallText>トップに戻る</SmallText>
                </Button>
            </div>
        </div>
    )
}
