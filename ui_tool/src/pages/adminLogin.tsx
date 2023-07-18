import { TabLeft, TabRight } from "../atom/Tab";
import { ChipGray, ChipWhite, ChipOrange } from '../atom/Chip';
import { CheckBox } from "../atom/checkBox";
import { List } from "../molec/list";
import { WjHeader } from "../molec/header";

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
            <List name="웅진짱" date="2020-02-02 12.34.56" query="/page/vouse"/>
            <WjHeader />
        </>
    );
}