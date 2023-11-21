import { KTIcon } from '../../../../../../../../_metronic/helpers'
import { ListFilter } from './ListFilter';
import { useNavigate } from "react-router-dom";
import {  AddReasonCarOutServicePath } from '../../../routes/RoutesNames';
import { useIntl } from 'react-intl';
import { useAuth } from '../../../../../../auth';
const ListToolbar = () => {
  const {currentUser} = useAuth()
  const intl = useIntl();
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate(AddReasonCarOutServicePath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_reason_car_out_service') &&   <button type='button' className='btn btn-primary' onClick={handleAdd}>
        <KTIcon iconName='plus' className='fs-2' />
        {intl.formatMessage({ id: 'add_object' }, {
          name: intl.formatMessage({id:'reason'})
        })}
      </button>}
    </div>
  )
}

export { ListToolbar }
