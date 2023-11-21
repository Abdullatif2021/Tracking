
import { QUERIES, } from '../../../../../../../_metronic/helpers';
import {  getVehicleInfo } from '../core/_requests';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GeneralInfo from './Tabs/GeneralInfo';
import PhysicalInfo from './Tabs/physicalInfo';
import Insurance from './Tabs/Insurance';
import Purchase from './Tabs/Purchase';
import { useQuery } from 'react-query';
import { TabWrapper } from '../../../../../../../_metronic/helpers/components/appbar/TabWrapper';
import CustomAppBar from '../../../../../../../_metronic/helpers/components/appbar/CustomAppBar';
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner';


const View = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id: any = location.state;
    const [data, setData] = useState<any>({});
    const {
        data: dataInfo,
        isLoading
    } = useQuery(
        `${QUERIES.MANAGE_Details_VEHICLE}-${id}`,
        () => {
            return getVehicleInfo(id)
        },
        { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }

    )
    const [tab, setTab] = useState(0)



    useEffect(() => {
        if (dataInfo) {
            let initData = dataInfo?.data;
            setData({
                ...initData, insurance_number: initData?.meta_data.ins_number,
                 exp_date: initData.meta_data.ins_exp_date,
                 average:initData.meta_data?.average
            }
            )
        }
        //, 'purchase_info',
    }, [dataInfo])
    return (
        <>
            <div className='mb-10'>
            </div>
            <div className='card card-custom'>
                <CustomAppBar labels={['generalInfo', 'physicalInfo', 'insurance']} setSelectedTab={setTab} selectedTab={tab} />
                <div className='card-body py-4'>
                    <div className='tab-content pt-3'>
                        <TabWrapper index={0} selectedTab={tab}>
                            <GeneralInfo data={data} />
                        </TabWrapper>

                        <TabWrapper index={1} selectedTab={tab}>
                            <PhysicalInfo data={data} />
                        </TabWrapper>

                        <TabWrapper index={2} selectedTab={tab}>
                            <Insurance data={data} />
                        </TabWrapper>
                        {/* <TabWrapper index={3} selectedTab={tab}>
                            <Purchase data={data} />
                        </TabWrapper> */}
                        {/* <TabWrapper index={0} selectedTab={tab}>
                            <GeneralInfo />
                        </TabWrapper>
                        <TabWrapper index={1} selectedTab={tab}>
                            <PhysicalInfo />
                        </TabWrapper>


                        <TabWrapper index={2} selectedTab={tab}>
                            <Insurance />
                        </TabWrapper>

                        <TabWrapper index={3} selectedTab={tab}>
                            <Purchase />
                        </TabWrapper> */}



                    </div>
                </div>

            </div>
            {isLoading && <Spinner />}
        </>





    );
}

export default View;
