import { TabLeft, TabRight } from "../atom/Tab";
import { ChipGray, ChipWhite, ChipOrange } from '../atom/Chip';
import { CheckBox } from "../atom/CheckBox";
import { WjHeader } from "../molecule/Header";

export const AdminLogin = () => {

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!    
            </h1>
            <TabLeft text='메뉴 관리'/>
            <TabRight text='페이지 관리' />
            <ChipGray text="칩칩칩" />
            <ChipWhite text="퍕퍕퍕" />
            <ChipOrange text="zizizi" />
            <CheckBox />
            <WjHeader />
        </>
    );
}