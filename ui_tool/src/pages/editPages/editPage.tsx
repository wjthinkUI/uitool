import { AdabtiveTab } from "@molecule/AdabtiveTab/AdabtiveTab";
import { Outlet, useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react";

export const EditPage = () => {

    const navigate= useNavigate();
    const {id} = useParams();

    useEffect(() => {
        navigate(`/edit/${id}/desktop`, {replace: true})
    }, [navigate, id]);
    
    return (
        <>
            <AdabtiveTab />
            <Outlet />
        </>
    )
}