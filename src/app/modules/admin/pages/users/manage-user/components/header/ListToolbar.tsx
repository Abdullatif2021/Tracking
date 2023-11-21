import {KTIcon} from '../../../../../../../../_metronic/helpers'
import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {AddUserPath} from '../../../routes/RoutesNames'
import {useIntl} from 'react-intl'
import {useAuth} from '../../../../../../auth'
import { AddButton } from '../../../../../../../../_metronic/helpers/components/AddButton'
const ListToolbar = () => {
  const {currentUser} = useAuth()
  const intl = useIntl()
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate(AddUserPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_user') && (
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
