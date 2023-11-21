// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {MaintenanceStatus} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { CustomeCell } from './CustomeCell'
const columnsTable :  ReadonlyArray<Column<MaintenanceStatus>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<MaintenanceStatus> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },

  {
    Header: (props) => <CustomHeader<MaintenanceStatus>  tableProps={props} title={<Localize value='parent' />} className='min-w-125px' />,
    accessor: 'parent',
  },

  {
    Header: (props) => <CustomHeader<MaintenanceStatus>  tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <CustomHeader<MaintenanceStatus>  tableProps={props} title={<Localize value='type' />} className='min-w-125px' />,
    id: 'type',
    Cell: ({...props}) => <CustomeCell data={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <CustomHeader<MaintenanceStatus>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


