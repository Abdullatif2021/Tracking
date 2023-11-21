import {Formik} from 'formik'
import {
  KTCard,
  KTCardBody,
  QUERIES,
  ResponeApiCheck,
  deleteAttributeObjArray,
  initialResponseError,
  isNotEmpty,
} from '../../../../../../../_metronic/helpers'
import {Form} from './Form'
import {roleSchema} from './validationForm'
import {getEditTrip, update} from '../core/_requests'
import {useLocation} from 'react-router-dom'
import {useNotification} from '../../../../../../../_metronic/hooks/useNotification'
import {useNavigate} from 'react-router-dom'
import {ListPath} from '../../routes/RoutesNames'
import {useQuery} from 'react-query'
import {useEffect, useState} from 'react'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'


const Edit = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const id: any = location.state
  const {showNotification} = useNotification()
  const [enableApi, setEnableApi] = useState<boolean>(true)
  const [editData, setEditData] = useState(null)
  const {data, isLoading} = useQuery(
    `${QUERIES.TRIP_LIST_QUERY_TABLE}- ${id}`,
    () => {
      return getEditTrip(id)
    },
    {
      enabled: isNotEmpty(id) && enableApi,
    }
  )
  useEffect(() => {
    if (data) {
      setEnableApi(false)
      console.log(data)
    }
  }, [data])

  return (
    <KTCard>
      <KTCardBody className='py-4'>
        {data && (
          <Formik
            enableReinitialize={true}
            validationSchema={roleSchema}
         //   initialValues={data}
            initialValues={{
              date: data.date,
              type: data.type,
              note: data.note,
              path: data?.path.map((item) => {
                return {
                  from: item.from,
                  to: item.to,
                  cars_id: item.cars_id,
                  other_to: item.other_to,
                  time_in: item.time_in,
                  passenger: item.passenger,
                  region:item?.region
                }
              }),
            }}
            initialStatus={{edit: true}}
            onSubmit={async (values, {setSubmitting}) => {
             // setSubmitting(true)
             const formData=values;
              delete formData['toAddresses']
              deleteAttributeObjArray(formData, 'fromAddresses', 'path')
              deleteAttributeObjArray(formData, 'vehicles', 'path')
              console.log(formData)
              try {
                const res: ResponeApiCheck = await update(formData,id)
                if (res.result == 'success') {
                  navigate(ListPath)
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
            <Form />
          </Formik>
        )}
        {!data && <Spinner />}
      </KTCardBody>
    </KTCard>
  )
}

export default Edit
