interface ChipProps {
    text: string
}


export const ChipGray = (props:ChipProps) => {

    return (
        <div className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-grayscale-300">
            <p className="text-sm font-bold text-left text-grayscale-0">{props.text}</p>
        </div>
    )
}

export const ChipWhite = (props:ChipProps) => {

    return (
        <div className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-grayscale-0 border border-grayscale-300">
            <p className="text-sm font-bold text-left text-grayscale-300">{props.text}</p>
        </div>
    )
}

export const ChipOrange = (props:ChipProps) => {

    return (
        <div className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-primary-950">
            <p className="text-sm font-bold text-left text-grayscale-0">{props.text}</p>
        </div>
    )
}