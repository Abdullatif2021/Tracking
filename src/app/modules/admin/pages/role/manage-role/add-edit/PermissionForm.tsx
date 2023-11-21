import {FC} from 'react'
import { useFormikContext} from 'formik'
import {useIntl} from 'react-intl'
import {QUERIES} from '../../../../../../../_metronic/helpers'
import {useQuery} from 'react-query'
import {getPermissions} from '../core/_requests'
import FormikCheckBoxArray from '../../../../../../../_metronic/helpers/components/formik/FormikCheckBoxArray'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'

interface Props {
  role_name :string,
  role_id:number
}
const PermissionForm: FC<Props> = ({role_name,role_id}) => {

  const intel = useIntl()
  const {data: permissionList} = useQuery(
    `${QUERIES.PERMISSION_LIST_VALUES}`,
    () => {
      return getPermissions()
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )

  const {handleSubmit, resetForm, isSubmitting, isValid, touched, values} = useFormikContext()
  return (
    <>
      {permissionList &&
        <form className='form' onSubmit={handleSubmit} noValidate encType='multipart/form-data'>
          {/* begin::Scroll */}
          <div className='d-flex flex-column scroll-y me-n7 pe-7'>
            <div className='row'>
              <FormikCheckBoxArray
                options={[{permissions: permissionList,name:role_name,id:role_id }]|| []}
                name='permissions'
                title='Permissions'
                group={role_name}
              />
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
      {(isSubmitting  || !permissionList) && <Spinner />}
    </>
  )
}

export {PermissionForm}
