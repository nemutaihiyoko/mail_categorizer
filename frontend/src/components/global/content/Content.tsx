export default function Content(props: {
    style?: React.CSSProperties,
    children: React.ReactNode
}) {
    const defaultStyle: React.CSSProperties = {
        paddingTop: '4px',
        paddingLeft: '8px',
    }

    return (
        <div style={{ ...defaultStyle, ...props.style }}>
            {props.children}
        </div >
    )
}