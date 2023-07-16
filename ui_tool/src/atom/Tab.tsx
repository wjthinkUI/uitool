
interface TapProps {
    text: string
}


export const Tab = (props:TapProps) => {

    return (
        <button className="w-auto h-64 text-grayscale-50 bg-primary-950">
            {props.text}
        </button>
    )
}