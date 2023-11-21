import {FC, useEffect, useState} from 'react'
import {useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import {QUERIES} from '../../../../../../../_metronic/helpers'
import {useQuery} from 'react-query'
import {getDriverList, getGroupListByRegion, getShiftList} from '../../../core/commonRequests'
import {WorkingDayType} from '../../core/model'
import { getRegionsBytype } from '../../core/request'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'

const Form: FC = () => {
  const {values , handleSubmit, resetForm, isSubmitting, isValid, touched} = useFormikContext()
  const [enableApi, setEnableApi] = useState<boolean>(true)
  //#region api
  const {data: driverList} = useQuery(
    `${QUERIES.ALL_DRIVER_LIST_VALUES}`,
    () => {
      return getDriverList()
    },
    {
      enabled: enableApi,
    }
  )

  const {data: shiftList} = useQuery(
    `${QUERIES.ALL_SHIFT_LIST_VALUES}`,
    () => {
      return getShiftList()
    },
    {
      enabled: enableApi,
    }
  )

  const {data: regionList} = useQuery(
    `${QUERIES.ALL_REGION_Working_LIST_VALUES}-${values['type']}`,
    () => {
      return getRegionsBytype(values['type'])
    },
    {
      enabled: values['type'] ? true : false,
    }
  )

  const {data: groupList} = useQuery(
    `${QUERIES.ALL_GROUP_BY_REGION_LIST_VALUES}-${values['region_id']}`,
    () => {
      return getGroupListByRegion(values['region_id'])
    },
    {
      enabled: values['region_id'] ? true : false,
    }
  )

  useEffect(() => {
    if (driverList && shiftList) {
      setEnableApi(false)
    }
  }, [driverList, shiftList])

  const intel = useIntl()
  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <>
      {!enableApi && (
        <form className='form' onSubmit={handleSubmit} noValidate>
          {/* begin::Scroll */}
          <div className='d-flex flex-column scroll-y me-n7 pe-7'>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <FormikSelectInput
                  title={intel.formatMessage({id: 'driver'})}
                  name={'driver_id'}
                  isRequired={true}
                  options={driverList || []}
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <FormikSelectInput
                  title={intel.formatMessage({id: 'type'})}
                  name={'type'}
                  relatedName={['region_id','group_id']}
                  isRequired={true}
                  options={WorkingDayType}
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <FormikSelectInput
                  title={intel.formatMessage({id: 'region'})}
                  name={'region_id'}
                  isRequired={true}
                  options={regionList || []}
                />
              </div>

              {(values['type'] == 1 || !values['type']) && (
                <div className='col-md-6 col-sm-12'>
                  <FormikSelectInput
                    title={intel.formatMessage({id: 'group_id'})}
                    name={'group_id'}
                    isRequired={false}
                    options={groupList || []}
                  />
                </div>
              )}
              <div className='col-md-6 col-sm-12'>
                <FormikSelectInput
                  title={intel.formatMessage({id: 'work_timing'})}
                  name={'shift_id'}
                  isRequired={true}
                  options={shiftList || []}
                />
              </div>
              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({id: 'date'})}
                  name={'date'}
                  isRequired={true}
                  type='date'
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
      {enableApi && <Spinner />}
    </>
  )
}

export {Form}
