import {FC, useState} from 'react'
import {useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import { MaintenanceStatusTypes } from '../core/_models'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'


const Form: FC = () => {

  const intel = useIntl()
  const {handleSubmit, resetForm, isSubmitting, isValid, touched} = useFormikContext()
  return (
    <>
      <form className='form' onSubmit={handleSubmit} noValidate>
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
              <FormikSelectInput
                title={intel.formatMessage({id: 'type'})}
                name={'type'}
                isRequired={true}
                options={MaintenanceStatusTypes || []}
              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'value'})}
                name={'type_value'}
                isRequired={true}
                type='number'
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
      {isSubmitting && <Spinner />}
    </>
  )
}

export {Form}
