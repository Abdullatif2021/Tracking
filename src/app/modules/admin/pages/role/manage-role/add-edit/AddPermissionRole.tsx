import {Formik} from 'formik'
import {
  KTCard,
  KTCardBody,
  QUERIES,
  ResponeApiCheck,
  initialResponseError,
} from '../../../../../../../_metronic/helpers'
import {roleSchema} from './validationForm'
import {addPermission, create, getPermissionRole, getPermissions} from '../core/_requests'
import {useNotification} from '../../../../../../../_metronic/hooks/useNotification'
import {useLocation, useNavigate} from 'react-router-dom'
import {ListRolePath} from '../../routes/RoutesNames'
import {useEffect, useState} from 'react'
import {useQuery} from 'react-query'
import { PermissionForm } from './PermissionForm'



const AddPermissionRole = () => {
  const navigate = useNavigate()
  const {showNotification} = useNotification()
  const location = useLocation()
  const {permissions,id,name}: any = location.state
  // const {data: myPermissionList} = useQuery(
  //   `${QUERIES.ROLE_PERMISSION_LIST_VALUES}- ${id}`,
  //   () => {
  //     return getPermissionRole(id)
  //   },
  //   {
  //     refetchOnMount: true,
  //   }
  // )


  return (
    <KTCard>
      <KTCardBody className='py-4'>
        <Formik
          enableReinitialize={true}
         // validationSchema={roleSchema}
          initialValues={{permissions:permissions?.map(x=>x.id)}}
          initialStatus={{edit: false}}
          onSubmit={async (values, {setSubmitting}) => {
            console.log(values)
            setSubmitting(true)
            try {
              const res: ResponeApiCheck = await addPermission(values, id)
              if (res.result == 'success') {
                navigate(ListRolePath)
              }
              showNotification(res)
            } catch (ex) {
              showNotification({error_description: ex, ...initialResponseError})
              console.error(ex)
            } finally {
              setSubmitting(true)
            }
          }}
          onReset={(values) => {
            console.log('Formik onReset')
          }}
        >
          <PermissionForm role_name={name}  role_id={id}/>
        </Formik>
      </KTCardBody>
    </KTCard>
  )
}

export default AddPermissionRole
