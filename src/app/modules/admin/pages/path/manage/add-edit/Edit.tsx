import { Formik } from 'formik'
import {
  KTCard,
  KTCardBody,
  QUERIES,
  ResponeApiCheck,
  initialResponseError,
} from '../../../../../../../_metronic/helpers'
import { Form } from './Form'
import { roleSchema } from './validationForm'
import { update } from '../core/_requests'
import { useLocation } from 'react-router-dom'
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification'
import { useNavigate } from 'react-router-dom'
import { ListPath } from '../../routes/RoutesNames'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getTerminalList } from '../../../core/commonRequests'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'


const Edit = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const data: any = location.state
  const [editData, setEditData] = useState(null)
  const [enableApi, setEnableApi] = useState<boolean>(true);
  const {
    data: terminalList,
  } = useQuery(
    `${QUERIES.ALL_Terminal_LIST_VALUES}`,
    () => {
      return getTerminalList()
    },
    {
      enabled: enableApi
    }
  )
  useEffect(() => {
    if (data) {
      let temData = {
        id: data?.id,
        name: data?.name,
        count: data?.count,
        terminal: data?.path_terminal.map((item) => {
          return {
            terminal: item.terminal,
            voice_file: item?.voice,
            priority: item?.priority
          }
        }),
      }
      setEditData(temData)
      setEnableApi(false)
    }
  }, [data])
  const { showNotification } = useNotification()
  console.log(data)
  return (
    <KTCard>
      <KTCardBody className='py-4'>
        {terminalList && editData &&
          <Formik
            enableReinitialize={true}
            validationSchema={roleSchema}
            initialValues={editData}
            initialStatus={{ edit: true }}
            onSubmit={async (values: any, { setSubmitting }) => {
              values['count'] = values['terminal'].length
              setSubmitting(true)
              try {
                const res: ResponeApiCheck = await update(values)
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
            <Form terminalList={terminalList} />
          </Formik>}
        {(!terminalList) && <Spinner />}
      </KTCardBody>
    </KTCard>
  )
}

export default Edit
