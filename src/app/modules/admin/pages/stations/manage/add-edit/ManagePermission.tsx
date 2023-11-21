import {Formik} from 'formik'
import {
  KTCard,
  KTCardBody,
  QUERIES,
  ResponeApiCheck,
  initialResponseError,
} from '../../../../../../../_metronic/helpers'
import { getRoleList, update, updatePermission} from '../core/_requests'
import {useLocation} from 'react-router-dom'
import {useNotification} from '../../../../../../../_metronic/hooks/useNotification'
import {useNavigate} from 'react-router-dom'
import {useQuery} from 'react-query'

import {FormPermission} from './FormPermission'
import {ListPath} from '../../routes/RoutesNames'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
const ManagePermission = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const data: any = location.state
  const {showNotification} = useNotification()
  const {data: roleList} = useQuery(`${QUERIES.STATION_ROLE_LIST_VALUES}`, () => {
    return getRoleList()
  })
  // const {data: permissionStation} = useQuery(`${QUERIES.STATION_PERMISSION_VALUES}`, () => {
  //   return getPermissionStation(id)
  // })

  return (
    <KTCard>
      {roleList  && (
        <KTCardBody className='py-4'>
          <Formik
            enableReinitialize={true}
            initialValues={roleList.reduce(
              (obj, cur) => ({
                ...obj,
                [cur.id]: data?.permissions?.map((x) => x.id).includes(cur.id),
              }),
              {}
            )}
            initialStatus={{edit: true}}
            onSubmit={async (values, {setSubmitting}) => {
              console.log(values)
              setSubmitting(true)
              try {
                var result = Object.keys(values)
                  .filter((x) => values[x])
                  .map((key) => {
                    if (values[key]) return parseInt(key)
                  })
                console.log(result)
                //   setSubmitting(false)
                const res: ResponeApiCheck = await updatePermission({'permissions': result}, data?.id)
                if (res.result == 'success') {
                  navigate(ListPath)
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
            <FormPermission roleList={roleList || []} />
          </Formik>
        </KTCardBody>
      )}
      {( !roleList) && <Spinner />}
    </KTCard>
  )
}

export default ManagePermission
