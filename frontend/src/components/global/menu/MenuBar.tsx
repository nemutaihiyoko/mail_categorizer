import MenuRow from './MenuRow';
import { useNavigate } from 'react-router-dom';



export default function MenuBar() {
    const navigate = useNavigate();

    const menuBarStyle = {
        width: '200px',
        backgroundColor: '#f0f0f0',
    };

    return (
        <div style={menuBarStyle}>
            <MenuRow menuType="sample" onClick={() => navigate('/sample')} />
            <MenuRow menuType="hoge" onClick={() => navigate('/hoge')} />
            <MenuRow menuType="foo" onClick={() => navigate('/foo')} />
            <MenuRow menuType="api" onClick={() => navigate('/api')} />
        </div>
    )
}