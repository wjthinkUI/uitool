import { useParams } from "react-router-dom"
import { EditAddSelectDesign } from "@molecule/Edit/EditAddSelectDesign";

export const EditPageDesktop = () => {
    const {id} = useParams();
    return (
        <div className="">
            <h1>
                id : {id}
            </h1>
            <p> 데스크톱 페이지 </p>
            <EditAddSelectDesign onClick={() => console.log('click')}/>
        </div>
    )
}