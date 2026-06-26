import { Outlet, useNavigate } from 'react-router-dom'
import PageTitleText from '../../components/text/custom/PageTitleText'
import SmallText from '../../components/text/common/SmallText'
import Button from '../../components/button/common/Button'
import Content from '../../components/global/content/Content'

export default function SamplePage() {
    const navigate = useNavigate()

    return (
        <Content>
            <PageTitleText>Sampleページ</PageTitleText>
            <SmallText>パス `/sample` に対応するサンプルページです。</SmallText>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                <Button onClick={() => navigate('/')}>
                    <SmallText>トップへ戻る</SmallText>
                </Button>
                <Button onClick={() => navigate('detail')}>
                    <SmallText>詳細ページへ</SmallText>
                </Button>
            </div>
            <div style={{ marginTop: '24px', padding: '16px', border: '1px dashed #bbb', borderRadius: '8px' }}>
                <Outlet />
            </div>
        </Content>
    )
}
