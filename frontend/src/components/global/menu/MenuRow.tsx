import getCurrentMenu from './getCurrentMenu';
import { type MenuType, getMenuDisplayName } from './MenuType';


export default function MenuRow(props: {
    menuType: MenuType,
    onClick: () => void,
}) {
    const currentMenuType: MenuType = getCurrentMenu();
    const name: string = getMenuDisplayName(props.menuType);
    const style = {
        fontSize: '20px',
        padding: '8px',
        fontWeight: props.menuType === currentMenuType ? 'bold' : 'normal',
    };

    return <div style={style} onClick={props.onClick}>
        {name}
    </div>
}