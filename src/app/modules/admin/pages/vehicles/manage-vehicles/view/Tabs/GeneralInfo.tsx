import { useIntl } from 'react-intl';
import InputDetail from '../../../../../../../../_metronic/helpers/components/fields/InputDetail';
import CheckBoxDetail from '../../../../../../../../_metronic/helpers/components/fields/CheckBoxDetail';
import ImageDetail from '../../../../../../../../_metronic/helpers/components/fields/ImageDetail';
const GeneralInfo = ({ ...props }) => {
    const { data } = props;
    //#region fetch data
  
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
                        title={intel.formatMessage({ id: 'make' })}
                        text={data['make']}

                    />
                </div>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'model' })}
                        text={data['model']}

                    />
                </div>

                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'color' })}
                        text={data['color']}

                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'engine_type' })}
                        text={data['engine_type']}

                    />
                </div>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'type' })}
                        text={data['type']}

                    />
                </div>

                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'group' })}
                        text={data['group']}

                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'station' })}
                        text={data['station']}

                    />
                </div>

            </div>




            <h3>license Info</h3>
            <div className='separator separator-dashed my-5'></div>

            <div className='row'>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'license_plate' })}
                        text={data['license_plate']}


                    />
                </div>

                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'lic_exp_date' })}
                        text={data['lic_exp_date']}

                    />
                </div>


                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'reg_exp_date' })}
                        text={data['reg_exp_date']}

                    />
                </div>
            </div>

            <div className='separator separator-dashed my-5'></div>
            <div className='row'>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <ImageDetail
                        title={intel.formatMessage({ id: 'vehicle_image' })}
                        imgSrc={data['vehicle_image']}

                    />
                </div>

                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <CheckBoxDetail
                        title={intel.formatMessage({ id: 'in_service' })}
                        value={true}
                    //value={data['in_service']}
                    />
                </div>



            </div>

        </div>

    );
}

export default GeneralInfo;
