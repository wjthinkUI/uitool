import { useParams } from "react-router-dom"
import { EditAddSelectDesign } from "@molecule/Edit/EditAddSelectDesign";
import { useContext, useState } from "react";
import { EditPageContext } from "@pages/editPages/editPage";

export const EditPageMobile = () => {
    const {id} = useParams();
    const editPageContext = useContext(EditPageContext);

  if (!editPageContext) {
    throw new Error(
      "EditPageContext must be used within a EditPageContext.Provider"
    );
  }
  const { editPageData, setEditPageData } = editPageContext;

  const handleEdit = () => {
    // setEditPageData({...editPageData, editPageData['newKey'] = 'newValue' });
    setEditPageData({...editPageData, mob: 'ile'})
  }

    return (
        <div className="w-[640px]">
            <h1>
                id : {id}
            </h1>
            <p> 모바일 페이지 </p>
            <EditAddSelectDesign onClick={handleEdit}/>
        </div>
    )
}