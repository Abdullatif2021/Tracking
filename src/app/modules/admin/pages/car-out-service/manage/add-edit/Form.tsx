import { FC } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { QUERIES } from '../../../../../../../_metronic/helpers'
import { getReasonCarOutServiceList, getVehicleList } from '../../../core/commonRequests'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'

const Form: FC = () => {
  const { handleSubmit, resetForm, isSubmitting, isValid, touched } = useFormikContext()
  const intel = useIntl();
  //#region api
  const {
    data: vehicleList,
  } = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
      return getVehicleList()
    },
  )

  const {
    data: reasonList,
  } = useQuery(
    `${QUERIES.ALL_REASON_CAR_OUT_SERVICE_LIST_VALUES}`,
    () => {
      return getReasonCarOutServiceList()
    },
  )



  return (
    <>
      {vehicleList && (
        <form className='form' onSubmit={handleSubmit} noValidate >
          {/* begin::Scroll */}
          <div className='d-flex flex-column scroll-y me-n7 pe-7'>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <FormikSelectInput
                  title={intel.formatMessage({ id: 'vehicle' })}
                  name={'vehicles_id'}
                  isRequired={true}
                  options={vehicleList || []}
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({ id: 'start' })}
                  name={'start'}
                  isRequired={true}
                  type='datetime-local'
                />
              </div>
              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({ id: 'end' })}
                  name={'end'}
                  isRequired={true}
                  type='datetime-local'
                />
              </div>
              <div className='col-md-6 col-sm-12'>
                <FormikSelectInput
                  title={intel.formatMessage({ id: 'reason' })}
                  name={'reason_id'}
                  isRequired={true}
                  options={reasonList || []}
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
      {(isSubmitting || !vehicleList || !reasonList) && <Spinner />}
    </>
  )
}

export { Form }
