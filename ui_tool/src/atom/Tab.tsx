import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store'
import { setActiveTab } from '../pages/adminManageList/tabStateSlice';

interface TapProps {
    text: string
}

export const TabLeft = ({text}:TapProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const activeTab = useSelector((state: RootState) => state.tab.activeTab)
    return (
        <button onFocus={()=>dispatch(setActiveTab(0))} 
            className={`${(activeTab === 0)? `text-grayscale-50 bg-primary-950` : ` text-grayscale-950 bg-primary-50`} w-[50%] h-16 font-bold text-center border rounded-l-[10px] border-grayscale-100 px-10 py-5`} >
            {text}
        </button>
    )
}
export const TabRight = ({text}:TapProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const activeTab = useSelector((state: RootState) => state.tab.activeTab)
    return (
        <button onFocus={()=>dispatch(setActiveTab(1))} 
        className={`${(activeTab === 1)? `text-grayscale-50 bg-primary-950` : ` text-grayscale-950 bg-primary-50`} w-[50%] h-16 rounded-r-[10px] font-bold text-center border border-grayscale-100 px-10 py-5`} >
            {text}
        </button>
    )
}