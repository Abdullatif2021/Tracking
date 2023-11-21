import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {AddCameraVehiclePath} from '../../../routes/RoutesNames'
import {useAuth} from '../../../../../../auth'
import {AddButton} from '../../../../../../../../_metronic/helpers/components/AddButton'
const ListToolbar = () => {
  const intl = useIntl()
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate(AddCameraVehiclePath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_camera_vehicle') && (
        <AddButton
          title={intl.formatMessage(
            {id: 'add_object'},
            {
              name: intl.formatMessage({id: 'camera'}),
            }
          )}
          handleAdd={handleAdd}
        />
      )}
    </div>
  )
}

export {ListToolbar}
