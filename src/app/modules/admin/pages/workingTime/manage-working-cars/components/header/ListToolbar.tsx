import { KTIcon } from '../../../../../../../../_metronic/helpers'
import { ListFilter } from './ListFilter';
import { useNavigate } from "react-router-dom";
import { useIntl } from 'react-intl';
import { AddWorkingCarsPath } from '../../../routes/RoutesNames';
import { useAuth } from '../../../../../../auth';
const ListToolbar = () => {
  const { currentUser } = useAuth();
  const intl = useIntl();
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate(AddWorkingCarsPath)
  }

  return (
    <div className='d-flex ' data-kt-user-table-toolbar='base'>
      <ListFilter />
      { currentUser?.roles.includes('add_car_working_day') &&  <button type='button' className='btn btn-primary' onClick={handleAdd}>
        <KTIcon iconName='plus' className='fs-2' />
        {intl.formatMessage({ id: 'add_object' }, {
          name: intl.formatMessage({id:'working_day'})
        })}
      </button>}
    </div>
  )
}

export { ListToolbar }
