import {FC, useState} from 'react'
import {useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import {useQuery} from 'react-query'
import {QUERIES} from '../../../../../../../_metronic/helpers'
import { getVehicleList} from '../../../core/commonRequests'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import FormikSwitch from '../../../../../../../_metronic/helpers/components/formik/FormikCheckBox'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'

const Form: FC = () => {
  const [enableApi, setEnableApi] = useState<boolean>(true)
  //#region api
  const {data: countrList} = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
      return getVehicleList()
    },
    {
      enabled: enableApi,
    }
  )
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
                title={intel.formatMessage({id: 'ads'})}
                name={'ads_id'}
                isRequired={true}
                options={countrList || []}
              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikSwitch title={intel.formatMessage({id: 'maintenance'})} name={'maintenance'} />
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
