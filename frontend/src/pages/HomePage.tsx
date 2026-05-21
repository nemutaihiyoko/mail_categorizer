import { useNavigate } from 'react-router-dom'
import PageTitleText from '../components/text/custom/PageTitleText'
import SmallText from '../components/text/common/SmallText'
import Button from '../components/button/common/Button'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div>
            <PageTitleText>ホーム</PageTitleText>
            <SmallText>ここは `/` に対応するサンプルのホーム画面です。</SmallText>
            <div style={{ marginTop: '24px' }}>
                <Button onClick={() => navigate('/sample')}>
                    <SmallText>Sampleページへ</SmallText>
                </Button>
            </div>
        </div>
    )
}
