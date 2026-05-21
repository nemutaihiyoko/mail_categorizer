import { BrowserRouter, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import SmallText from './components/text/common/SmallText'
import Button from './components/button/common/Button'
import { routeConfig } from './router'

function AppContent() {
    const element = useRoutes(routeConfig)
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ marginBottom: '24px', display: 'flex', gap: '12px' }}>
                <Button onClick={() => navigate('/')}>
                    <SmallText color={location.pathname === '/' ? '#0070f3' : '#333'}>トップ</SmallText>
                </Button>
                <Button onClick={() => navigate('/sample')}>
                    <SmallText color={location.pathname.startsWith('/sample') ? '#0070f3' : '#333'}>Sample</SmallText>
                </Button>
            </div>

            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '24px', background: '#fafafa' }}>
                {element}
            </div>
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}
