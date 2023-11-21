import {FC} from 'react'
import {useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import { QUERIES } from '../../../../../../../_metronic/helpers'
import { getStationList } from '../../../vehicles/core/_requests'
import { useQuery } from 'react-query'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'

const Form: FC = () => {
    const {
        data: stationList,
    } = useQuery(
        `${QUERIES.VEHICLES_STATION_LIST_VALUES}`,
        () => {
            return getStationList()
        },
    )
  const intel = useIntl()

  const {handleSubmit, resetForm, isSubmitting, isValid, touched} = useFormikContext()
  return (
    <>
     {stationList && <form className='form' onSubmit={handleSubmit} noValidate>
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
                title={intel.formatMessage({id: 'station'})}
                name={'station_id'}
                isRequired={true}
                options={stationList}
              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'longitude'})}
                name={'longitude'}
                isRequired={false}
              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'latitude'})}
                name={'latitude'}
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
      </form>}
      {(isSubmitting|| !stationList) && <Spinner />}
    </>
  )
}

export {Form}
