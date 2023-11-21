import { KTIcon } from '../../../../../../../../_metronic/helpers'
import { ListFilter } from './ListFilter';
import { useNavigate } from "react-router-dom";
import { useIntl } from 'react-intl';

const ListToolbar = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const handleAdd = () => {

  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ListFilter />
    </div>
  )
}

export { ListToolbar }
