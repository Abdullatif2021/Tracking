import {KTIcon} from '../../../../../../../../_metronic/helpers'
import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {AddUserTypePath} from '../../../routes/RoutesNames'
import {useIntl} from 'react-intl'
import {useParams} from 'react-router-dom'
import {useAuth} from '../../../../../../auth'
import {AddButton} from '../../../../../../../../_metronic/helpers/components/AddButton'
const ListToolbar = () => {
  const {currentUser} = useAuth()
  const {id} = useParams()
  const intl = useIntl()
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate(AddUserTypePath, {state: id})
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_user_type') && (
        <AddButton
          title={intl.formatMessage(
            {id: 'add_object'},
            {
              name: intl.formatMessage({id: 'user'}),
            }
          )}
          handleAdd={handleAdd}
        />
      )}
    </div>
  )
}

export {ListToolbar}
