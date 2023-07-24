import { useParams } from "react-router-dom"
import { EditAddSelectDesign } from "@molecule/Edit/EditAddSelectDesign";
import { useContext, useState } from "react";
import { EditPageContext } from "@pages/editPages/editPage";

export const EditPageTablet = () => {
    const {id} = useParams();
    const editPageContext = useContext(EditPageContext);

  if (!editPageContext) {
    throw new Error(
      "EditPageContext must be used within a EditPageContext.Provider"
    );
  }
  const { editPageData, setEditPageData } = editPageContext;

  const newLayoutItem = {
    id: "newId",
    position: "top",
  };
  const handleEdit = () => {
    // setEditPageData({...editPageData, editPageData['newKey'] = 'newValue' });
    setEditPageData((prevState) => ({...prevState, layout: [...prevState.layout, newLayoutItem]}))
  }

    return (
        <div className="w-[1024px]">
            <h1>
                id : {id}
            </h1>
            <p> 태블릿 페이지 </p>
            <EditAddSelectDesign onClick={handleEdit}/>
        </div>
    )
}