import { useNavigate } from 'react-router-dom'

export default function TitleBar() {
    const navigate = useNavigate();

    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '24px',
        padding: '8px',
    }

    return <div style={style} onClick={() => navigate('/')}>
        Mail Categorizer
    </div>
}