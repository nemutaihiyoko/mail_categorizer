export type MenuType = 'home'
    | 'sample'
    | 'hoge'
    | 'foo'
    | 'api'
    ;

export const getMenuDisplayName = (menuType: MenuType): string => {
    switch (menuType) {
        case 'home':
            return 'Home';
        case 'sample':
            return 'Sample';
        case 'hoge':
            return 'Hoge';
        case 'foo':
            return 'Foo';
        case 'api':
            return 'API';
    }
}