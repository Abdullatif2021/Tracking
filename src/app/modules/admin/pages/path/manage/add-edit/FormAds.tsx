import {FC, useState} from 'react'
import { useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import {useQuery} from 'react-query'
import {QUERIES} from '../../../../../../../_metronic/helpers'
import {getAdsList} from '../../../core/commonRequests'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'

const FormAds : FC  = () => {
  const intel = useIntl()
  const [enableApi, setEnableApi] = useState<boolean>(true)
  const {data: ads} = useQuery(
    `${QUERIES.ALL_ADS_LIST_VALUES}`,
    () => {
      return getAdsList()
    },
    {
      enabled: enableApi,
    }
  )
  const {handleSubmit, resetForm, isSubmitting, isValid, touched, values, setFieldValue} =
    useFormikContext()
  return (
    <>
      {
        <form className='form' onSubmit={handleSubmit} noValidate>
          {/* begin::Scroll */}
          <div className='d-flex flex-column scroll-y me-n7 pe-7'>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({id: 'name'})}
                  name={'name'}
                  isRequired={false}
                  disabled={true}
                />
              </div>
              <div className='separator separator-dashed my-5'></div>
              <div className='col-md-6 col-sm-12'>
                <FormikSelectInput
                  title={intel.formatMessage({id: 'ads'})}
                  name={`ads_id`}
                  isRequired={false}
                  options={ads || []}
                />
              </div>
              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({id: 'time'})}
                  name={`time`}
                  isRequired={false}
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
      }
      {(isSubmitting || !ads) && <Spinner />}
    </>
  )
}

export {FormAds}
