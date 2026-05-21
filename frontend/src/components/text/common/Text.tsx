type TextProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function Text(props: TextProps) {
    return (
        <div style={props.style}>
            {props.children}
        </div>
    )
}