import { AdabtiveTab } from "@molecule/AdabtiveTab/AdabtiveTab";
import { Outlet, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, createContext } from "react";

interface EditPageContextType {
    editPageData: Object;
    setEditPageData: React.Dispatch<React.SetStateAction<Object>>;
}

export const EditPageContext = createContext<EditPageContextType|null>(null);
export const EditPage = () => {
    const navigate= useNavigate();
    const {id} = useParams();
    const initialState = {
        key : id,
        title: 'asd',
        page: `/${id}`,
        date: Date(),
        layout : [],
    }
    
    const [editPageData, setEditPageData] = useState<Object>(initialState)

    useEffect(() => {
        navigate(`/edit/${id}/desktop`, {replace: true})
    }, [navigate, id]);

    useEffect(() => {
        editPageData
        console.log('updated!', editPageData)
    }, [editPageData])

    return (
        <>
            <EditPageContext.Provider value={{editPageData, setEditPageData}}>
            <AdabtiveTab />
            <p>{JSON.stringify(editPageData, null, 2)}</p>
            <Outlet />
            </EditPageContext.Provider>
        </>
    )
}