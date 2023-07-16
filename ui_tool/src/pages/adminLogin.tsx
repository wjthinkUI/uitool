import { TabLeft, TabRight } from "../atom/Tab";

export const AdminLogin = () => {

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!    
            </h1>
            <TabLeft text='메뉴 관리'/>
            <TabRight text='페이지 관리' />
        </>
    );
}