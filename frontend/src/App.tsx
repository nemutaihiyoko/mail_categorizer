import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routeConfig } from './router'
import MenuBar from './components/global/menu/MenuBar'
import TitleBar from './components/global/title/TitleBar'

function AppContent() {
    const element = useRoutes(routeConfig)

    const globalStyle = {
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
    }

    return (
        <div style={globalStyle}>
            <TitleBar />
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                <MenuBar />
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
