// import { useParams } from "react-router-dom";
// import { EditAddSelectDesign } from "@molecule/Edit/EditAddSelectDesign";
// import { useContext, useState } from "react";
// import { EditPageContext } from "@pages/editPages/editPage";
// import { EditTestBlock } from "@organism/Edit/EditTestBlock";

// export const EditPageDesktop = () => {
//   const { id } = useParams();
//   const editPageContext = useContext(EditPageContext);

//   if (!editPageContext) {
//     throw new Error(
//       "EditPageContext must be used within a EditPageContext.Provider"
//     );
//   }
//   const { editPageData, setEditPageData } = editPageContext;

//   const newLayoutItem = {
//     id: "desktopAdd",
//     position: "desktop",
//   };
//   const handleEdit = () => {
//     // setEditPageData({...editPageData, editPageData['newKey'] = 'newValue' });
//     setEditPageData((prevState) => ({...prevState, layout: [...prevState.layout, newLayoutItem]}))
//   }
//     return (
//         <div className="">
//             <h1>
//                 id : {id}
//             </h1>
//             <p> 데스크톱 페이지 </p>
//             <EditAddSelectDesign onClick={handleEdit}/>
//             <EditTestBlock />
//             <EditTestBlock />
//             <EditTestBlock />
//         </div>
//     )
// }