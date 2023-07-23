import { useParams } from "react-router-dom"
import { EditAddSelectDesign } from "@molecule/Edit/EditAddSelectDesign";

export const EditPageMobile = () => {
    const {id} = useParams();
    return (
        <div className="w-[640px]">
            <h1>
                id : {id}
            </h1>
            <p> 모바일 페이지 </p>
            <EditAddSelectDesign onClick={() => console.log('click')}/>
        </div>
    )
}