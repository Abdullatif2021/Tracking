import { FC, useState } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { ProfileImage } from '../../../../../../../_metronic/utlis/formik'
import { useQuery } from 'react-query'
import { QUERIES } from '../../../../../../../_metronic/helpers'
import { getVehicleGroupList } from '../../../core/commonRequests'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import FormikFile from '../../../../../../../_metronic/helpers/components/formik/FormikFile'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'




const Form: FC = () => {

    const [enableApi, setEnableApi] = useState<boolean>(true);
    //#region api
    const {
        data: vechielGroup,
    } = useQuery(
        `${QUERIES.ALL_VECHILE_GROUP_LIST_VALUES}`,
        () => {
            return getVehicleGroupList()
        },
        {
            enabled: enableApi
        }
    )

    const intel = useIntl()
    const { handleSubmit, resetForm, isSubmitting, isValid, touched, status } = useFormikContext();
    return (
        <>
            <form className='form' onSubmit={handleSubmit} noValidate encType="multipart/form-data">
                {/* begin::Scroll */}
                <div
                    className='d-flex flex-column scroll-y me-n7 pe-7'
                >
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'first_name' })}
                                name={'first_name'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'last_name' })}
                                name={'last_name'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'email' })}
                                name={'email'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'password' })}
                                name={'password'}
                                isRequired={false}
                            
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikSelectInput
                                title={intel.formatMessage({ id: 'group_vehcile' })}
                                name={'group_id'}
                                isRequired={false}
                                options={vechielGroup || []}
                            />
                        </div>
                        { <div className='col-md-6 col-sm-12'>
                            <FormikFile
                                title={intel.formatMessage({ id: 'image' })}
                                name={'image'}
                                isRequired={false}
                                fieldFile={ProfileImage}
                            />
                        </div>}
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
