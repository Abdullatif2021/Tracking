import { FC } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'





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
                                title={intel.formatMessage({ id: 'name' })}
                                name={'name'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'code' })}
                                name={'code'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'color' })}
                                name={'color'}
                                isRequired={true}
                                type='color'
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'time_in' })}
                                name={'time_in'}
                                isRequired={true}
                                type='time'
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikInputLabel
                                title={intel.formatMessage({ id: 'period' })}
                                name={'period'}
                                isRequired={true}
                                type='number'
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
