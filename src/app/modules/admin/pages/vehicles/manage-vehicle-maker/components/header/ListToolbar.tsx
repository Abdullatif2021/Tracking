import { KTIcon } from '../../../../../../../../_metronic/helpers'
import { ListFilter } from './ListFilter';
import { useNavigate } from "react-router-dom";
import { AddMakerPath } from '../../../routes/RoutesNames';
import { useIntl } from 'react-intl';
import { useAuth } from '../../../../../../auth';
const ListToolbar = () => {
  const {currentUser} = useAuth()
  const intl = useIntl();
  const navigate = useNavigate();
  const HandleAdd = () => {
    navigate(AddMakerPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      {currentUser?.roles.includes('add_vehicle_maker') &&  <button type='button' className='btn btn-primary' onClick={HandleAdd}>
        <KTIcon iconName='plus' className='fs-2' />
        {intl.formatMessage({ id: 'add_object' }, {
          name: intl.formatMessage({id:'maker'})
        })}
      </button>}
    </div>
  )
}

export { ListToolbar }
