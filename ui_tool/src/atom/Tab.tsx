
interface TapProps {
    text: string
}


export const TabLeft = (props:TapProps) => {

    return (
        <button className="w-auto h-16 font-bold text-center border rounded-l-[10px] focus:text-grayscale-50 focus:bg-primary-950 text-grayscale-950 bg-primary-50 border-grayscale-100 px-10 py-5" >
            {props.text}
        </button>
    )
}
export const TabRight = (props:TapProps) => {

    return (
        <button className="w-auto h-16 focus:text-grayscale-50 focus:bg-primary-950 rounded-r-[10px] font-bold text-center text-grayscale-950 bg-primary-50 border border-grayscale-100 px-10 py-5" >
            {props.text}
        </button>
    )
}