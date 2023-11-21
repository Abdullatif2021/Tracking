
import { ListFilter } from './ListFilter';
import { useNavigate } from "react-router-dom";
import { useIntl } from 'react-intl';
;
const ListToolbar = () => {

  const intl = useIntl();
  const navigate = useNavigate();


  return (
    <div className='d-flex ' data-kt-user-table-toolbar='base'>
      <ListFilter />

    </div>
  )
}

export { ListToolbar }
