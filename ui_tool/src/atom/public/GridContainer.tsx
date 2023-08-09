import { useState, useEffect } from "react"
import type { GridContainerProps } from 'types'

export const GridContainer = ({children, deviceWidth}:GridContainerProps) => {
    const containerStyle = {
        desktop: 'w-[1220px] h-auto mx-auto',
        tablet: 'w-[785px] h-auto mx-auto',
        mobile: 'w-[375px] h-auto mx-auto',
    }
    const { desktop, tablet, mobile } = containerStyle;
    const [currentContainer, setCurrentContainer] = useState<string>(desktop);
    useEffect(() => {
        if(deviceWidth === 1220) {
            setCurrentContainer(desktop)
        } else if (deviceWidth === 785) {
            setCurrentContainer(tablet)
        } else if (deviceWidth === 375) {
            setCurrentContainer(mobile)
        }
    }, [deviceWidth])
    
    return (
        <div className={currentContainer}>
                {children}
        </div>
    )
}