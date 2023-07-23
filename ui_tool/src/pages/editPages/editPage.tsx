import { AdabtiveTab } from "@molecule/AdabtiveTab/AdabtiveTab";
import { useParams } from "react-router-dom"

export const EditPage = () => {
    const {id, device} = useParams();
    return (
        <>
            <AdabtiveTab />
            <h1>
                id : {id}
            </h1>
            <h1>
                device: {device}
            </h1>
        </>
    )
}