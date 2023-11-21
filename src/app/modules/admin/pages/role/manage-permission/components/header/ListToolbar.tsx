import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {AddPermissionPath} from '../../../routes/RoutesNames'
import {useAuth} from '../../../../../../auth'
import {AddButton} from '../../../../../../../../_metronic/helpers/components/AddButton'
const ListToolbar = () => {
  const {currentUser} = useAuth()
  const intl = useIntl()
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate(AddPermissionPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_permission') && (
        <AddButton
          title={intl.formatMessage(
            {id: 'add_object'},
            {
              name: intl.formatMessage({id: 'permission'}),
            }
          )}
          handleAdd={handleAdd}
        />
      )}
    </div>
  )
}

export {ListToolbar}
