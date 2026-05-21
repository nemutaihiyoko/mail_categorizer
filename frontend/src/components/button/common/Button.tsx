type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}