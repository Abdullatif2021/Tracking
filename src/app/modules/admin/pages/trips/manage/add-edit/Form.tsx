import {FC, Fragment, useEffect, useState} from 'react'
import {useFormikContext, FieldArray} from 'formik'
import {useIntl} from 'react-intl'
import {useQuery} from 'react-query'
import {TripType, initialPath, tripTypeList} from '../core/_models'
import {getPassengers, getRegiosList} from '../../../core/commonRequests'
import {
  getRegionTrips,
  geRegionTripCars,
  geExternalRegionTrips,
  getRegionsByTypeList,
} from '../core/_requests'
import FormikCustomSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikCustomSelectInput'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import FormikMultiSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikMultiSelectInput'
import {Spinner} from '../../../../../../../_metronic/helpers/components/Spinner'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import {QUERIES} from '../../../../../../../_metronic/helpers/crud-helper/consts'
import IconButton from '../../../../../../../_metronic/helpers/components/buttons/iconButton'

const Form: FC = () => {
  const {handleSubmit, resetForm, isSubmitting, isValid, touched, values, setFieldValue} =
    useFormikContext()
  const [enableApi, setEnableApi] = useState<boolean>(true)
  //#region api
  const {data: regiosList} = useQuery(
    `${QUERIES.ALL_REGION_TYPE_LIST_VALUES}-${values['type']}`,
    () => {
      return getRegionsByTypeList(1)
    },
    {
      enabled: !isSubmitting,
    }
  )
  const {data: passengersList} = useQuery(
    `${QUERIES.ALL_PASSENGER_LIST_VALUES}`,
    () => {
      return getPassengers()
    },
    {
      enabled: enableApi,
    }
  )

  useEffect(() => {
    if (passengersList && regiosList) {
      setEnableApi(false)
    }
  }, [regiosList, passengersList])

  //#endregion
  const intel = useIntl()

useEffect(()=>{
console.log(values)
},[values])
  return (
    <>
      {
        <form className='form' onSubmit={handleSubmit} noValidate>
          {/* begin::Scroll */}
          <div className='d-flex flex-column scroll-y me-n7 pe-7'>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <FormikCustomSelectInput
                  title={intel.formatMessage({id: 'type'})}
                  name={`type`}
                  isRequired={true}
                  relatedFieldOption={[`toAddresses`]}
                  relatedFieldName={[`path`]}
                  callApi={[geExternalRegionTrips]}
                  options={tripTypeList || []}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({id: 'date'})}
                  name={'date'}
                  isRequired={true}
                  type='date'
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({id: 'note'})}
                  name={'note'}
                  isRequired={false}
                />
              </div>
            </div>

            <h3>{intel.formatMessage({id: 'trip_path'})}</h3>

            <div className='separator separator-dashed my-5'></div>

            <FieldArray name='path'>
              {({insert, remove, push}) => (
                <Fragment>
                  <div className='d-flex mb-2 justify-content-end'>
                    <IconButton
                      onClick={() => {
                        push(initialPath)
                      }}
                    >
                      <i className='ki-duotone ki-plus fs-2' style={{color: 'white'}} />
                    </IconButton>
                  </div>
                  {values['path'] &&
                    values['path'].length > 0 &&
                    values['path'].map((item, index) => (
                      <Fragment key={index}>
                        <div className='row'>
                          <div className='col-md-10 col-sm-12 row'>
                            <div className='col-md-6 col-sm-12'>
                              <FormikCustomSelectInput
                                title={intel.formatMessage({id: 'region'})}
                                name={`path.${index}.region`}
                                relatedFieldName={[
                                  `path.${index}.cars_id`,
                                  `path.${index}.from`,
                                  `path.${index}.to`,
                                ]}
                                isRequired={false}
                                relatedFieldOption={[
                                  `path.${index}.vehicles`,
                                  `path.${index}.fromAddresses`,
                                ]}
                                callApi={[geRegionTripCars, getRegionTrips]}
                                options={regiosList || []}
                              />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                              <FormikSelectInput
                                title={intel.formatMessage({id: 'vehicles'})}
                                name={`path.${index}.cars_id`}
                                isRequired={false}
                                options={values['path'][index]?.vehicles || []}
                              />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                              <FormikSelectInput
                                title={intel.formatMessage({id: 'from_address'})}
                                name={`path.${index}.from`}
                                isRequired={true}
                                options={values['path'][index]?.fromAddresses || []}
                              />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                              {parseInt(values['type']) == TripType.External ||
                              parseInt(values['type']) == TripType.Internal ? (
                                <FormikSelectInput
                                  title={intel.formatMessage({id: 'to_address'})}
                                  name={`path.${index}.to`}
                                  isRequired={true}
                                  options={
                                    (parseInt(values['type']) === TripType.External
                                      ? values['toAddresses']
                                      : values['path'][index]?.fromAddresses?.map((item) => {
                                          return {
                                            value: item.to,
                                            text: item?.text,
                                          }
                                        })) || []
                                  }
                                />
                              ) : (
                                <FormikInputLabel
                                  title={intel.formatMessage({id: 'to_address'})}
                                  name={`path.${index}.other_to`}
                                  isRequired={false}
                                />
                              )}
                            </div>
                            <div className='col-md-6 col-sm-12'>
                              <FormikInputLabel
                                title={intel.formatMessage({id: 'time_in'})}
                                name={`path.${index}.time_in`}
                                isRequired={false}
                                type='time'
                              />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                              <FormikMultiSelectInput
                                title={intel.formatMessage({id: 'passenger'})}
                                name={`path.${index}.passenger`}
                                isRequired={false}
                                options={passengersList || []}
                              />
                            </div>
                          </div>
                          <div className='col-md-2 col-sm-12 d-flex align-items-center justify-content-evenly'>
                            <IconButton
                              onClick={() => {
                                push(initialPath)
                              }}
                            >
                              <i className='ki-duotone ki-plus fs-2' style={{color: 'white'}} />
                            </IconButton>
                            {values['path'].length - 1 == index && (
                              <IconButton
                                color='bg-danger'
                                onClick={() => {
                                  let tmp = values['path'].filter((_, i) => i != index)

                                  setFieldValue(`path`, tmp)
                                }}
                              >
                                <i className='ki-duotone ki-minus fs-2' style={{color: 'white'}} />
                              </IconButton>
                            )}
                          </div>
                        </div>

                        <div className='separator separator-dashed my-5'></div>
                      </Fragment>
                    ))}
                </Fragment>
              )}
            </FieldArray>
          </div>
          {/* begin::Actions */}
          <div className='text-center pt-15'>
            <ResetButton resetForm={resetForm} isSubmitting={isSubmitting} />
            <SubmitButton isSubmitting={isSubmitting} isValid={isValid} touched={touched} />
          </div>
          {/* end::Actions */}
        </form>
      }
      {(isSubmitting || !regiosList || !passengersList) && <Spinner />}
    </>
  )
}

export {Form}
