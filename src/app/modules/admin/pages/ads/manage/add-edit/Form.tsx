import {FC} from 'react'
import {useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import { FieldLink } from '../../../../../../../_metronic/utlis/formik'
import FormikAudio from '../../../../../../../_metronic/helpers/components/formik/FormikAudio'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'


const Form: FC = () => {

  const intel = useIntl()

  const {handleSubmit, resetForm, isSubmitting, isValid, touched} = useFormikContext()
  return (
    <>
      {(
        <form className='form' onSubmit={handleSubmit} noValidate encType="multipart/form-data">
          {/* begin::Scroll */}
          <div className='d-flex flex-column scroll-y me-n7 pe-7'>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({id: 'name'})}
                  name={'name'}
                  isRequired={true}
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({id: 'period'})}
                  name={'period'}
                  isRequired={false}
                  type='number'
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <FormikAudio
                  title={intel.formatMessage({id: 'link'})}
                  name={'link'}
                  isRequired={false}
                  fieldFile={FieldLink}
                />
              </div>
            </div>
          </div>
          {/* begin::Actions */}
          <div className='text-center pt-15'>
            <ResetButton resetForm={resetForm} isSubmitting={isSubmitting} />
            <SubmitButton isSubmitting={isSubmitting} isValid={isValid} touched={touched} />
          </div>
          {/* end::Actions */}
        </form>
      )}
      {(isSubmitting) && <Spinner />}
    </>
  )
}

export {Form}
