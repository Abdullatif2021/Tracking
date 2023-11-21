import { useIntl } from 'react-intl';
import { ManagePurshaseInfoListWrapper } from '../../purchase-info/List';
import FormikInputLabel from '../../../../../../../../_metronic/helpers/components/formik/FormikInputLabel';

const Purchase = ({ purshase_info }) => {
    const intel = useIntl()
    return (
        <div
            className='d-flex flex-column scroll-y me-n7 pe-7'
        >

            <div className='separator separator-dashed my-5'></div>
            <div className='row'>
                <div className='col-md-6 col-sm-6 col-xs-12'>
                    <FormikInputLabel
                        title={intel.formatMessage({ id: 'exp_name' })}
                        name={'exp_name'}
                        isRequired={false}
                    />
                </div>
                <div className='col-md-6 col-sm-6 col-xs-12'>
                    <FormikInputLabel
                        title={intel.formatMessage({ id: 'exp_amount' })}
                        name={'exp_amount'}
                        isRequired={false}
                        type='number'
                    />
                </div>



            </div>
            <h3>{intel.formatMessage({ id:'purchase_info'})}</h3>
        <div className='separator separator-dashed my-5'></div>
          { purshase_info.length > 0 &&  <ManagePurshaseInfoListWrapper data={purshase_info} />}


        </div>
    );
}

export default Purchase;
