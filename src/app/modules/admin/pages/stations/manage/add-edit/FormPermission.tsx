import {FC} from 'react'
import {useFormikContext} from 'formik'

import {useIntl} from 'react-intl'
import { RoleResponse } from '../core/_models'
import FormikSwitch from '../../../../../../../_metronic/helpers/components/formik/FormikCheckBox'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
interface Props {
    roleList :RoleResponse
}
const FormPermission: FC<Props> = ({roleList}) => {
  const intel = useIntl()
  const {handleSubmit, resetForm, isSubmitting, isValid, touched} = useFormikContext()

  return (
    <>
      <form className='form' onSubmit={handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div className='d-flex flex-column scroll-y me-n7 pe-7'>
          <div className='row'>
            {roleList.map((item) => {
              return (
                <div className='col-md-12 col-sm-12'>
                  <FormikSwitch
                    title={item?.name}
                    name={item.id.toString()}
                  />
                </div>
              )
            })}
          </div>
        </div>
        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <ResetButton resetForm={resetForm} isSubmitting={isSubmitting} />
          <SubmitButton isSubmitting={isSubmitting} isValid={isValid} touched={touched} />
        </div>
        {/* end::Actions */}
      </form>
      {(isSubmitting || !roleList) && <Spinner />}
    </>
  )
}

export {FormPermission}
