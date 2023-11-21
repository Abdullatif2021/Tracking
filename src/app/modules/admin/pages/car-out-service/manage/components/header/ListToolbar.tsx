import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {AddPath} from '../../../routes/RoutesNames'
import {useAuth} from '../../../../../../auth'
import {AddButton} from '../../../../../../../../_metronic/helpers/components/AddButton'
const ListToolbar = () => {
  const intl = useIntl()
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate(AddPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_car_out_service') && (
        <AddButton
          title={intl.formatMessage(
            {id: 'add_object'},
            {
              name: intl.formatMessage({id: 'car_out_service'}),
            }
          )}
          handleAdd={handleAdd}
        />
      )}
    </div>
  )
}

export {ListToolbar}
