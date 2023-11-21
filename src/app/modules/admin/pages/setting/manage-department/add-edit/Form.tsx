import { FC, useState } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { QUERIES } from '../../../../../../../_metronic/helpers'
import { getBuildingListList, } from '../../../core/commonRequests'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'




const Form: FC = () => {
    const [enableApi, setEnableApi] = useState<boolean>(true);
    //#region api
    const {
        data: buildingList,
    } = useQuery(
        `${QUERIES.ALL_BUILDING_LIST_VALUES}`,
        () => {
            return getBuildingListList()
        },
        {
            enabled: enableApi
        }
    )
    const intel = useIntl()
    const { handleSubmit, resetForm, isSubmitting, isValid, touched } = useFormikContext();
    return (
        <>
            <form className='form' onSubmit={handleSubmit} noValidate>
                {/* begin::Scroll */}
                <div
                    className='d-flex flex-column scroll-y me-n7 pe-7'
                >
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'name' })}
                                name={'name'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikSelectInput
                                title={intel.formatMessage({ id: 'building' })}
                                name={'building_id'}
                                isRequired={true}
                                options={buildingList || []}
                            />
                        </div>

                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'floor_number' })}
                                name={'floor_number'}
                                type='number'
                                isRequired={true}
                            />
                        </div>

                        
                    </div>

                </div>
                {/* begin::Actions */}
                <div className='text-center pt-15'>
                    <ResetButton
                        resetForm={resetForm}
                        isSubmitting={isSubmitting}
                    />
                    <SubmitButton
                        isSubmitting={isSubmitting}
                        isValid={isValid}
                        touched={touched}
                    />
                </div>
                {/* end::Actions */}
            </form>
            {(isSubmitting) && <Spinner />}
        </>
    )
}

export { Form }
