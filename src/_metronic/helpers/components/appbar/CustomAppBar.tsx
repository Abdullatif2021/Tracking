import clsx from 'clsx';
import React from 'react';
import { useIntl } from 'react-intl';
interface Props {
    labels: string[],
    setSelectedTab: (value: number) => void,
    selectedTab: number,


}
const CustomAppBar = (props: Props) => {
    const intel = useIntl()
    const { labels, setSelectedTab, selectedTab } = props;
    return (
        <>
            
            <div className='card-header card-header-stretch overflow-auto'>
                <ul
                    className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap '
                    role='tablist'
                >
                    {
                        labels.filter(x => x).map((item, index) => {
                            return (
                                <li className='nav-item'>
                                    <a
                                        className={clsx(`nav-link cursor-pointer`, { active: selectedTab == index })}
                                        onClick={() => setSelectedTab(index)}
                                        role='tab'
                                    >
                                        {intel.formatMessage({ id: item })}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>

    );
}

export default CustomAppBar;
