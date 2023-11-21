import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { getColorList, getEngineTypeList, getGroupList, getMakerList, getModelList, getStationList, getTypeList } from '../../../core/_requests';
import { QUERIES } from '../../../../../../../../_metronic/helpers';
import { FieldImage } from '../../../../../../../../_metronic/utlis/formik';
import FormikSelectInput from '../../../../../../../../_metronic/helpers/components/formik/FormikSelectInput';
import FormikInputLabel from '../../../../../../../../_metronic/helpers/components/formik/FormikInputLabel';
import FormikFile from '../../../../../../../../_metronic/helpers/components/formik/FormikFile';
import FormikSwitch from '../../../../../../../../_metronic/helpers/components/formik/FormikCheckBox';

const GeneralInfo = () => {
    //#region fetch data
    const {
        data: makerList,
    } = useQuery(
        `${QUERIES.VEHICLES_MAKER_LIST_VALUES}`,
        () => {
            return getMakerList()
        },

    )
    const {
        data: modelList,
    } = useQuery(
        `${QUERIES.VEHICLES_MODEL_LIST_VALUES}`,
        () => {
            return getModelList()
        },

    )
    const {
        data: typeList,
    } = useQuery(
        `${QUERIES.VEHICLES_TYPE_LIST_VALUES}`,
        () => {
            return getTypeList()
        },

    )
    const {
        data: colorList,
    } = useQuery(
        `${QUERIES.VEHICLES_COLOR_LIST_VALUES}`,
        () => {
            return getColorList()
        },

    )
    const {
        data: groupList,
    } = useQuery(
        `${QUERIES.VEHICLES_GROUP_LIST_VALUES}`,
        () => {
            return getGroupList()
        },

    )
    const {
        data: engineTypeList,
    } = useQuery(
        `${QUERIES.VEHICLES_ENGINE_TYPE_LIST_VALUES}`,
        () => {
            return getEngineTypeList()
        },

    )
    const {
        data: stationList,
    } = useQuery(
        `${QUERIES.VEHICLES_STATION_LIST_VALUES}`,
        () => {
            return getStationList()
        },

    )
    
//#endregion fetch data
    const intel = useIntl()
    return (
       
            <div
                className='d-flex flex-column scroll-y me-n7 pe-7'
            >
     
                <div className='separator separator-dashed my-5'></div>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSelectInput
                            title={intel.formatMessage({ id: 'make' })}
                            name={'make_id'}
                            isRequired={true}
                            options={makerList|| []}
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSelectInput
                            title={intel.formatMessage({ id: 'model' })}
                            name={'model_id'}
                            isRequired={true}
                            options={modelList|| []}
                        />
                    </div>

                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSelectInput
                            title={intel.formatMessage({ id: 'color' })}
                            name={'color_id'}
                            isRequired={true}
                            options={colorList|| []}
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSelectInput
                            title={intel.formatMessage({ id: 'engine_type' })}
                            name={'engine_type'}
                            isRequired={true}
                            options={engineTypeList|| []}
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSelectInput
                            title={intel.formatMessage({ id: 'type' })}
                            name={'type_id'}
                            isRequired={true}
                            options={typeList|| []}
                        />
                    </div>

                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSelectInput
                            title={intel.formatMessage({ id: 'group' })}
                            name={'group_id'}
                            isRequired={true}
                            options={groupList|| []}
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSelectInput
                            title={intel.formatMessage({ id: 'station' })}
                            name={'station_id'}
                            isRequired={true}
                            options={stationList || []}
                        />
                    </div>
                    </div>
                

                <h3>license Info</h3>
                <div className='separator separator-dashed my-5'></div>

                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'license_plate' })}
                            name={'license_plate'}
                            isRequired={true}

                        />
                    </div>

                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'lic_exp_date' })}
                            name={'lic_exp_date'}
                            isRequired={false}
                            type={'date'}
                        />
                    </div>


                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikInputLabel
                            title={intel.formatMessage({ id: 'reg_exp_date' })}
                            name={'reg_exp_date'}
                            isRequired={false}
                            type={'date'}

                        />
                    </div>
                </div>

                <div className='separator separator-dashed my-5'></div>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikFile
                            title={intel.formatMessage({ id: 'vehicle_image' })}
                            name={'vehicle_image'}
                            isRequired={false}
                            fieldFile={FieldImage}
                        />
                    </div>

                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <FormikSwitch
                            title={intel.formatMessage({ id: 'in_service' })}
                            name={'in_service'}
                        />
                    </div>



                </div>

            </div>
      
    );
}

export default GeneralInfo;
