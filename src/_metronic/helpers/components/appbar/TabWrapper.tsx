import clsx from 'clsx';
import  { ReactNode } from 'react';
interface Props {
    index: number,
    selectedTab: number,
    children: ReactNode
}
const TabWrapper = (props: Props) => {
    const { children, index, selectedTab } = props;
    return <div className={clsx('tab-pane', { active: index === selectedTab })}>
        {children}
    </div>

}
export  { TabWrapper }