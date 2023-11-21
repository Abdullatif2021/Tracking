import { KTIcon } from '../../../../../../../../_metronic/helpers'
import { ListFilter } from './ListFilter';
import { useNavigate } from "react-router-dom";
import {  AddPartCarPath } from '../../../routes/RoutesNames';
import { useIntl } from 'react-intl';
const ListToolbar = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate(AddPartCarPath)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
      <button type='button' className='btn btn-primary' onClick={handleAdd}>
        <KTIcon iconName='plus' className='fs-2' />
        {intl.formatMessage({ id: 'add_object' }, {
          name: intl.formatMessage({id:'part_car'})
        })}
      </button>
    </div>
  )
}

export { ListToolbar }
