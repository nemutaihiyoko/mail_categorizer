import { type MenuType } from './MenuType';


export default function getCurrentMenu(): MenuType {
    const path: string = window.location.pathname;

    if (path.startsWith('/sample')) {
        return 'sample';
    } else if (path.startsWith('/hoge')) {
        return 'hoge';
    } else if (path.startsWith('/foo')) {
        return 'foo';
    } else if (path.startsWith('/api')) {
        return 'api';
    } else {
        return 'home';
    }
}