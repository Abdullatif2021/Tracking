import { useIntl } from 'react-intl';
import FormikInputLabel from '../../../../../../../../_metronic/helpers/components/formik/FormikInputLabel';
const PhysicalInfo = () => {
//#endregion fetch data
    const intel = useIntl()
    return (
       
            <div
                className='d-flex flex-column scroll-y me-n7 pe-7'
            >
      
                <div className='separator separator-dashed my-5'></div>

                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'horse_power' })}
                            name={'horse_power'}
                            isRequired={true}
                            type='number'
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'average_km_l' })}
                            name={'average'}
                            isRequired={true}
                            type='number'
                        />
                    </div>




                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'int_mileage' })}
                            name={'int_mileage'}
                            isRequired={false}
                            type='number'
                        />
                    </div>


                </div>


                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'year' })}
                            name={'year'}
                            isRequired={true}
                            type='number'
                        />
                    </div>

                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'vin' })}
                            name={'vin'}
                            isRequired={true}
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'gps_code' })}
                            name={'gps_code'}
                            isRequired={true}

                        />
                    </div>

                </div>


            

                

            </div>
      
    );
}

export default PhysicalInfo;
