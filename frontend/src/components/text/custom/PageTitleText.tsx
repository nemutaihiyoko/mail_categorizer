import Text from '../common/Text'

type PageTitleTextProps = {
    children: React.ReactNode;
}

const style: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
}

export default function PageTitleText(props: PageTitleTextProps) {
    return (
        <Text style={style}>
            {props.children}
        </Text>
    )
}
