import { FC } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import FormikTextAreaLabel from '../../../../../../../_metronic/helpers/components/formik/FormikTextArea'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'




const Form: FC = () => {

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
                                title={intel.formatMessage({ id: 'group_name' })}
                                name={'name'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'description' })}
                                name={'description'}
                                isRequired={true}
                            />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12'>
                            <FormikTextAreaLabel
                                title={intel.formatMessage({ id: 'note' })}
                                name={'note'}
                                isRequired={false}
                              
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
