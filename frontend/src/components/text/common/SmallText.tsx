type SmallTextProps = {
    color?: string;
    children: React.ReactNode;
}

const style: React.CSSProperties = {
    fontSize: '12px',
}

export default function SmallText(props: SmallTextProps) {
    return (
        <div style={{
            ...style,
            color: props.color
        }}>
            {props.children}
        </div>
    )
}