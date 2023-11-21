import { useIntl } from 'react-intl';
import InputDetail from '../../../../../../../../_metronic/helpers/components/fields/InputDetail';
const PhysicalInfo = ({...props}) => {
    const {data}=props;
//#endregion fetch data
    const intel = useIntl()
    return (
       
            <div
                className='d-flex flex-column scroll-y me-n7 pe-7'
            >
      
                <div className='separator separator-dashed my-5'></div>

                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <InputDetail
                            title={intel.formatMessage({ id: 'horse_power' })}
                            text={data['horse_power']}
                          
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <InputDetail
                            title={intel.formatMessage({ id: 'average_km_l' })}
                            text={data['average']}
                          
                        />
                    </div>




                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <InputDetail
                            title={intel.formatMessage({ id: 'int_mileage' })}
                            text={data['int_mileage']}
                          
                        />
                    </div>


                </div>


                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <InputDetail
                            title={intel.formatMessage({ id: 'year' })}
                            text={data['year']}
                           
                        />
                    </div>

                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <InputDetail
                            title={intel.formatMessage({ id: 'vin' })}
                            text={data['vin']}
                          
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <InputDetail
                            title={intel.formatMessage({ id: 'gps_code' })}
                            text={data['gps_code']}
                       

                        />
                    </div>

                </div>


            

                

            </div>
      
    );
}

export default PhysicalInfo;
