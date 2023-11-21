import { FC } from 'react'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { QUERIES } from '../../../../../../../_metronic/helpers'
import { getVehicleList } from '../../../core/commonRequests'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import FormikFile from '../../../../../../../_metronic/helpers/components/formik/FormikFile'
import { FieldImage } from '../../../../../../../_metronic/utlis/formik'
import FormikSwitch from '../../../../../../../_metronic/helpers/components/formik/FormikCheckBox'

const Form: FC = () => {

  const intl = useIntl();
  //#region api
  const {
    data: vehicleList,
  } = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
      return getVehicleList()
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )

  const { handleSubmit, resetForm, isSubmitting, isValid, touched } = useFormikContext()
  return (
    <>

      <form className='form' onSubmit={handleSubmit} noValidate >
        {/* begin::Scroll */}
        <div className='d-flex flex-column scroll-y me-n7 pe-7'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <FormikSelectInput
                title={intl.formatMessage({ id: 'vehicle' })}
                name={'vehicle_id'}
                isRequired={true}
                options={vehicleList || []}

              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intl.formatMessage({ id: 'date' })}
                name={'date'}
                isRequired={true}
                type='date'
              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intl.formatMessage({ id: 'start_meter' })}
                name={'start_meter'}
                isRequired={true}
                type='number'
                hint={intl.formatMessage({ id: 'meter_reading_at_time_of_fuel_up' })}

              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intl.formatMessage({ id: 'province' })}
                name={'province'}
                isRequired={false}
              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intl.formatMessage({ id: 'reference' })}
                name={'reference'}
                isRequired={false}
              />
            </div>
            <h3>{intl.formatMessage({ id: 'fuel' })}</h3>
            <div className='separator separator-dashed my-5'></div>
            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intl.formatMessage({ id: 'qty_liter' })}
                name={'qty'}
                isRequired={false}
                type='number'


              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intl.formatMessage({ id: 'cost_unit' })}
                name={'cost_per_unit'}
                isRequired={false}
                type='number'

              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <FormikSelectInput
                title={intl.formatMessage({ id: 'fuel_from' })}
                name={'fuel_from'}
                isRequired={false}
                options={[
                  {
                    value: 'Fuel Tank',
                    text: 'Fuel Tank'
                  },
                  {
                    value: 'N/D',
                    text: 'N/D'
                  },
                  {
                    value: 'vendor',
                    text: 'Vendor'
                  }
                ]}

              />
            </div>
            <div className='separator separator-dashed my-5'></div>
            <div className='col-md-6 col-sm-12'>
              <FormikFile
                title={intl.formatMessage({ id: 'image' })}
                name={'icon'}
                isRequired={false}
                fieldFile={FieldImage}

              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <FormikSwitch
                title={intl.formatMessage({ id: 'complete' })}
                name={'complete'}
              />
            </div>
            <div className='col-md-12 col-sm-12'>
              <FormikInputLabel
                title={intl.formatMessage({ id: 'note' })}
                name={'note'}
                isRequired={false}

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

      {(isSubmitting) && <Spinner />}
    </>
  )
}

export { Form }
