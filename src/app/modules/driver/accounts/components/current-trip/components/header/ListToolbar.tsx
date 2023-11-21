
import {ListFilter} from './ListFilter'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import { DashBoardPath } from '../../../../routes/RouteNames'
import { useAuth } from '../../../../../../auth'
import { AddButton } from '../../../../../../../../_metronic/helpers/components/AddButton'

const ListToolbar = () => {
  const intl = useIntl()
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate(DashBoardPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
    </div>
  )
}

export {ListToolbar}
