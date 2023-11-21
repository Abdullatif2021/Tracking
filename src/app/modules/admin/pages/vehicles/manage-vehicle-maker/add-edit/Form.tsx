import { FC } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { FieldImage } from '../../../../../../../_metronic/utlis/formik'
import FormikFile from '../../../../../../../_metronic/helpers/components/formik/FormikFile'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'



const Form: FC= () => {
    const intel = useIntl()
    const { handleSubmit, resetForm, isSubmitting, isValid, touched } = useFormikContext();
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
                                title={intel.formatMessage({ id: 'make' })}
                                name={'make'}
                                isRequired={true}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <FormikFile
                                title={intel.formatMessage({ id: 'image' })}
                                name={'image'}
                                isRequired={false}
                                fieldFile={FieldImage}

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
