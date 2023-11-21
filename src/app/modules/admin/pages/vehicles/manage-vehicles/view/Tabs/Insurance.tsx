

import { useIntl } from 'react-intl';
import InputDetail from '../../../../../../../../_metronic/helpers/components/fields/InputDetail';

const Insurance = ({ ...props }) => {

    const { data } = props;
    //#endregion fetch data
    const intel = useIntl()
    return (

        <div
            className='d-flex flex-column scroll-y me-n7 pe-7'
        >

            <div className='separator separator-dashed my-5'></div>
            <div className='row'>
                <div className='col-md-6 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'insurance_number' })}
                        text={data['insurance_number']}

                    />
                </div>
                <div className='col-md-6 col-sm-6 col-xs-12'>
                    <InputDetail
                        title={intel.formatMessage({ id: 'exp_date' })}
                        text={data['exp_date']}

                    />
                </div>

                {/* <div className='col-md-6 col-sm-6 col-xs-12'>
                    <FormikFile
                        title={intel.formatMessage({ id: 'documents' })}
                        name={'documents']}
                        isRequired={false}
                        fieldFile={FieldDocument}
                       

                    />
                </div> */}

            </div>

        </div>

    );
}

export default Insurance;
