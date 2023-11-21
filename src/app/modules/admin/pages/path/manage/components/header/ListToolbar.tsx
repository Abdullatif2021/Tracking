import {KTIcon} from '../../../../../../../../_metronic/helpers'
import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {AddPath} from '../../../routes/RoutesNames'
import {useAuth} from '../../../../../../auth'
import { AddButton } from '../../../../../../../../_metronic/helpers/components/AddButton'
const ListToolbar = () => {
  const intl = useIntl()
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const handleAdd = () => {
    navigate(AddPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_path') && (
        <AddButton
          title={intl.formatMessage(
            {id: 'add_object'},
            {
              name: intl.formatMessage({id: 'path'}),
            }
          )}
          handleAdd={handleAdd}
        />
      )}
    </div>
  )
}

export {ListToolbar}
