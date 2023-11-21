import { FC, Fragment, useEffect, useState } from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { useIntl } from 'react-intl'


import { KTIcon, QUERIES } from '../../../../../../../_metronic/helpers'
import { getPassengers, getVehicleList } from '../../../../../admin/pages/core/commonRequests'
import { useQuery } from 'react-query'
import { geExternalRegionTrips, geRegionTripCars, getRegionTrips, getRegionsByTypeList } from '../../../../../admin/pages/trips/manage/core/_requests'
import { tripTypeList } from '../../../../../admin/pages/trips/manage/core/_models'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'

import { TripType } from '../../../core/Model'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'



const Form: FC = () => {
  const intel = useIntl()
  const { handleSubmit, resetForm, isSubmitting, isValid, touched, values, setFieldValue } = useFormikContext()
  const [enableApi, setEnableApi] = useState<boolean>(true);
  //#region api
  const {
    data: regiosList,
  } = useQuery(
    `${QUERIES.ALL_REGION_TYPE_LIST_VALUES}-${values['type']}`,
    () => {
      return getRegionsByTypeList(1)
    },
    {
      enabled: enableApi, cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false
    }
  )
  const {
    data: vehicle_list,
  } = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}-${values['region']}`,
    () => {
      return geRegionTripCars(values['region'])
    },
    {
      enabled: (values['region'] != undefined && values['region'] != null), cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false
    }
  )
  const {
    data: regionTrips,
  } = useQuery(
    `${QUERIES.ALL_REGION_TRIPS__LIST_VALUES}-${values['region']}`,
    () => {
      return getRegionTrips(values['region'])
    },
    {
      enabled: (values['region'] != undefined && values['region'] != null), cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false
    }
  )

  const {
    data: externalRegions,
  } = useQuery(
    `${QUERIES.ALL_EXTERNAL_REGION__TRIPS_LIST_VALUES}-${values['type']}`,
    () => {
      return geExternalRegionTrips()
    },
    {
      enabled: TripType.External == parseInt(values['type']), cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false
    }
  )
  useEffect(() => {
    if (regiosList) {
      setEnableApi(false)
    }

  }, [regiosList])


  //#endregion


  return (
    <>
      {<form className='form' onSubmit={handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div className='d-flex flex-column scroll-y me-n7 pe-7'>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <FormikSelectInput
                title={intel.formatMessage({ id: 'type' })}
                name='type'
                isRequired={true}
                options={tripTypeList || []}
              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({ id: 'date' })}
                name={'date'}
                isRequired={true}
                type='date'
              />
            </div>

            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({ id: 'note' })}
                name={'note'}
                isRequired={false}
              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <FormikSelectInput
                title={intel.formatMessage({ id: 'region' })}
                name='region'
                isRequired={false}
                options={regiosList || []}
              />
            </div>
            {/* <div className='col-md-6 col-sm-12'>
              <FormikSelectInput
                title={intel.formatMessage({ id: 'vehicles' })}
                name='vehicles'
                isRequired={false}
                options={vehicle_list || []}
              />
            </div> */}
            <div className='col-md-6 col-sm-12'>
              <FormikSelectInput
                title={intel.formatMessage({ id: 'from' })}
                name='from'
                isRequired={true}
                options={regionTrips || []}
              />
            </div>
          
            <div className='col-md-6 col-sm-12'>
              {((!values['type'] || parseInt(values['type']) == TripType.External || parseInt(values['type']) == TripType.Internal)) ?
                <FormikSelectInput
                  title={intel.formatMessage({ id: 'to' })}
                  name='to'
                  isRequired={true}
                  options={parseInt(values['type']) == TripType.External ? (externalRegions || []) : (regionTrips?.map((item) => {
                    return {
                      value: item?.to,
                      text: item?.text
                    }
                  }) || [])}
                />
                : <FormikInputLabel
                  title={intel.formatMessage({ id: 'other_to' })}
                  name='other_to'
                  isRequired={true}
                />
              }
            </div>
            <div className='col-md-6 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({ id: 'time_in' })}
                name='time_in'
                isRequired={false}
                type='time'
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
      {(isSubmitting) && <Spinner />}
    </>
  )
}

export { Form }
