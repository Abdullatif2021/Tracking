
import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import { useAuth } from '../../../../../../auth'
import { AddButton } from '../../../../../../../../_metronic/helpers/components/AddButton'
import { AddTripPath } from '../../../../routes/RouteNames'


const ListToolbar = () => {
  const intl = useIntl()
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate(AddTripPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      { (
        <AddButton
          title={intl.formatMessage(
            {id: 'add_object'},
            {
              name: intl.formatMessage({id: 'trip'}),
            }
          )}
          handleAdd={handleAdd}
        />
      )}
    </div>
  )
}

export {ListToolbar}
