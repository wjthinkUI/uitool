import { AdabtiveTab } from "@molecule/AdabtiveTab/AdabtiveTab";
import { Outlet, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, createContext } from "react";

interface EditPageContextType {
    editPageData: Object;
    setEditPageData: React.Dispatch<React.SetStateAction<EditPageDataType>>;
}

interface EditPageDataType {
    key: string | undefined;
    title: string;
    page: string;
    date: string;
    layout: Array<{ id: string; position: string }>;
}

export const EditPageContext = createContext<EditPageContextType|null>(null);
export const EditPage = () => {
    const navigate= useNavigate();
    const {id} = useParams();
    const initialState: EditPageDataType = {
        key : id,
        title: 'asd',
        page: `/${id}`,
        date: Date(),
        layout : [],
    }
    
    const [editPageData, setEditPageData] = useState<EditPageDataType>(initialState)

    useEffect(() => {
        navigate(`/edit/${id}/desktop`, {replace: true})
    }, [navigate, id]);

    useEffect(() => {
        editPageData
        console.log('updated!', editPageData)
    }, [editPageData])

    const {layout} = editPageData;
    return (
        <>
            <EditPageContext.Provider key={id} value={{editPageData, setEditPageData}}>
            <AdabtiveTab />
            <p>{JSON.stringify(editPageData, null, 2)}</p>
            <Outlet />
            {
                layout.map((v:any, i:any) => (
                   <p key={i}>{v.id}</p>
                ))
                }
            </EditPageContext.Provider>
        </>
    )
}