import { ReactComponent as Wjlogo } from "../assets/wjlogo.svg";
import { Link } from "react-router-dom";

/**로고, 마이페이지, 로그아웃 링크 연결해야할지 아직(어차피 의미가..) */
export const WjHeader = () => {

    return (
        <header className="flex flex-row items-center content-center">
            <Link to='/'>
                <Wjlogo width='162px' height='87px' />
            </Link>
            <Link to='#'>
                마이페이지
                </Link>
            <Link to='#'>로그아웃</Link>
        </header>
    )
}