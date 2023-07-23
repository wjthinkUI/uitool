import { useParams } from "react-router-dom"
import { EditAddSelectDesign } from "@molecule/Edit/EditAddSelectDesign";

export const EditPageTablet = () => {
    const {id} = useParams();
    return (
        <div className="w-[1024px]">
            <h1>
                id : {id}
            </h1>
            <p> 태블릿 페이지 </p>
            <EditAddSelectDesign onClick={() => console.log('click')}/>
        </div>
    )
}