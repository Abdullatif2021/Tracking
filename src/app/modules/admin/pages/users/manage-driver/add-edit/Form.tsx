import {FC, useState} from 'react'
import {useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import {useQuery} from 'react-query'
import {QUERIES} from '../../../../../../../_metronic/helpers'
import {getVehicleGroupList} from '../../../core/commonRequests'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import FormikFile from '../../../../../../../_metronic/helpers/components/formik/FormikFile'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'

const Form: FC = () => {
  const [enableApi, setEnableApi] = useState<boolean>(true)
  //#region api
  const {data: vechielGroup} = useQuery(
    `${QUERIES.ALL_VECHILE_GROUP_LIST_VALUES}`,
    () => {
      return getVehicleGroupList()
    },
    {
      enabled: enableApi,
    }
  )

  const intel = useIntl()
  const {handleSubmit, resetForm, isSubmitting, isValid, touched, status} = useFormikContext()
  return (
    <>
      <form className='form' onSubmit={handleSubmit} noValidate encType='multipart/form-data'>
        {/* begin::Scroll */}
        <div className='d-flex flex-column scroll-y me-n7 pe-7'>
          <h3>General Info</h3>
          <div className='separator separator-dashed my-5'></div>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'first_name'})}
                name={'first_name'}
                isRequired={true}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'middle_name'})}
                name={'middle_name'}
                isRequired={true}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'last_name'})}
                name={'last_name'}
                isRequired={true}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'address'})}
                name={'address'}
                isRequired={false}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'mobile'})}
                name={'phone'}
                isRequired={false}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'email'})}
                name={'email'}
                isRequired={true}
              />
            </div>
          </div>

          <h3>Date Info</h3>
          <div className='separator separator-dashed my-5'></div>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'exp_date'})}
                name={'exp_date'}
                isRequired={false}
                type='date'
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'start_date'})}
                name={'start_date'}
                isRequired={false}
                type='date'
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'issue_date'})}
                name={'issue_date'}
                isRequired={false}
                type='date'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'end_date'})}
                name={'end_date'}
                isRequired={false}
                type='date'
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'license_number'})}
                name={'license_number'}
                isRequired={false}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'contract_number'})}
                name={'contract_number'}
                isRequired={false}
              />
            </div>
          </div>

          <div className='separator separator-dashed my-5'></div>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'econtact'})}
                name={'econtact'}
                isRequired={false}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'emp_id'})}
                name={'emp_id'}
                isRequired={false}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikSelectInput
                title={intel.formatMessage({id: 'gender'})}
                name={'gender'}
                isRequired={false}
                options={[
                  {value: 1, text: 'Male'},
                  {
                    value: 2,
                    text: 'Female',
                  },
                ]}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'password'})}
                name={'password'}
                isRequired={false}
              //  type='password'
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikInputLabel
                title={intel.formatMessage({id: 'driver_commision'})}
                name={'driver_commision'}
                isRequired={false}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikSelectInput
                title={intel.formatMessage({id: 'driver_commision_type'})}
                name={'driver_commision_type'}
                isRequired={false}
                options={[
                  {value: 'amount', text: 'Amount'},
                  {
                    value: 'percentage',
                    text: 'Percentage',
                  },
                ]}
              />
            </div>
          </div>
          <h3>Image Info</h3>
          <div className='separator separator-dashed my-5'></div>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <FormikFile
                title={intel.formatMessage({id: 'driver_image'})}
                name={'driver_image_ed'}
                isRequired={false}
                fieldFile={'driver_image'}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikFile
                title={intel.formatMessage({id: 'license_image'})}
                name={'license_image_ed'}
                isRequired={false}
                fieldFile={'license_image'}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              <FormikFile
                title={intel.formatMessage({id: 'document'})}
                name={'documents_ed'}
                isRequired={false}
                fieldFile={'documents'}
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
