import { KTIcon } from '../../../../../../../../_metronic/helpers'
import { ListFilter } from './ListFilter';
import { useNavigate } from "react-router-dom";
import {  AddWorkTimePath } from '../../../routes/RoutesNames';
import { useIntl } from 'react-intl';
import { useAuth } from '../../../../../../auth';
const ListToolbar = () => {
  const intl = useIntl();
  const {currentUser} = useAuth()
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate(AddWorkTimePath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_working_time') &&    <button type='button' className='btn btn-primary' onClick={handleAdd}>
        <KTIcon iconName='plus' className='fs-2' />
        {intl.formatMessage({ id: 'add_object' }, {
          name: intl.formatMessage({id:'work_time'})
        })}
      </button>}
    </div>
  )
}

export { ListToolbar }
