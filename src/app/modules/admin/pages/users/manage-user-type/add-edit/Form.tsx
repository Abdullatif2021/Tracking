import { FC, useState } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { QUERIES } from '../../../../../../../_metronic/helpers'
import { getVehicleGroupList } from '../../../core/commonRequests'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'




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
                                title={intel.formatMessage({ id: 'name' })}
                                name={'name'}
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
                                title={intel.formatMessage({ id: 'mobile' })}
                                name={'mobile'}
                                isRequired={false}
                            />
                        </div>
                   { status!= 'edit' &&    <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'password' })}
                                name={'password'}
                                isRequired={true}
                            />
                        </div>}

                        <div className='col-md-6 col-sm-12'>
                            <FormikSelectInput
                                title={intel.formatMessage({ id: 'gender' })}
                                name={'gender'}
                                isRequired={false}
                                options={[
                                    { value: 1, text: 'Male' },
                                    {
                                        value: 2,
                                        text: 'Female',
                                    },
                                ]}
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
