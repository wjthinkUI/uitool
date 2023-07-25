interface AddBlock {
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const EditAddBlockHereTop = ({ onClick }: AddBlock) => {

    return (
        <div className="absolute w-[100%] hidden flex-col items-center group-hover:flex">
            <div className="w-[100%] border-b-2 border-dashed border-grayscale-700" />
                <button onClick={onClick} className=" relative bottom-[27px] w-[246px] h-[54px] text-center bg-grayscale-600 text-grayscale-0 text-body1m rounded-full">
                    + 여기에 블록 추가
                </button>
        </div>
    )
}

export const EditAddBlockHereBottom = ({ onClick }: AddBlock) => {

    return (
        <div className="absolute w-[100%] bottom-0 hidden flex-col items-center group-hover:flex">
                <button onClick={onClick} className=" relative top-[27px] w-[246px] h-[54px] text-center bg-grayscale-600 text-grayscale-0 text-body1m rounded-full">
                    + 여기에 블록 추가
                </button>
            <div className="w-[100%] border-t-2 border-dashed border-grayscale-700" />
        </div>
    )
}
