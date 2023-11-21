import { Formik } from 'formik'

import { useLocation, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification'
import {
  KTCard,
  KTCardBody,
  QUERIES,
  ResponeApiCheck,
  initialResponseError,
} from '../../../../../../../_metronic/helpers'
import { PermissionForm } from '../../permissions/PermissionForm'
import { addPermissionToUser, getPermissionRolesByUsers } from '../../core/_requests'
import {  ListUserTypePath } from '../../routes/RoutesNames'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'


const AddPermissionRoleType = () => {
  const navigate = useNavigate()
  const { showNotification } = useNotification();
  const [initValue, setInitvalue] = useState([]);
  const location = useLocation()
  const data: any = location.state
  const { data: myPermissionList } = useQuery(
    `${QUERIES.ROLE_PERMISSION_USERS_LIST_VALUES}- ${data?.id}`,
    () => {
      return getPermissionRolesByUsers(data?.data?.id)
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )
  useEffect(() => {
    if (myPermissionList) {
      setInitvalue(myPermissionList.map((item) => {
        return {
          permissions: item?.permissions,
          roles_id: item?.id,

        }
      }))
    }

  }, [myPermissionList])
  return (
    <KTCard>
      <KTCardBody className='py-4'>
        {myPermissionList && <Formik
          enableReinitialize={false}
          // validationSchema={roleSchema}
          initialValues={{
            all_permissions: myPermissionList.map((item) => {
              return {
                permissions: item?.permissions,
                roles_id: item?.id,

              }
            })
          }}
          initialStatus={{ edit: true }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            setSubmitting(true)
            try {
              const res: ResponeApiCheck = await addPermissionToUser(values, data?.data?.id)
              if (res.result == 'success') {
                navigate(ListUserTypePath+'/'+ data?.type_id)
              ///  navigate(ListDriverPath)
              }
              showNotification(res)
            } catch (ex) {
              showNotification({ error_description: ex, ...initialResponseError })
              console.error(ex)
            } finally {
              setSubmitting(true)
            }
          }}
          onReset={(values) => {
            console.log('Formik onReset')
          }}
        >
          {data && <PermissionForm name={data?.data?.name} />}
        </Formik>}
        {!myPermissionList && <Spinner/>}
      </KTCardBody>
    </KTCard>
  )
}

export default AddPermissionRoleType
