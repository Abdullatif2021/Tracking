// @ts-nocheck
import { Column } from 'react-table'
import { ActionsCell } from './ActionsCell'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { User } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { CustomCellDate } from './CustomCellDate';
import { InfoCell } from '../../../../../../../../_metronic/helpers/components/table/columns/InfoCell'
import { EnableCell } from '../../../../../../../../_metronic/helpers/components/table/columns/EnableCell'
const columnsTable: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<User> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },

  {
    Header: (props) => <CustomHeader<VehicleMaker> tableProps={props} title={<Localize value='profile' />} className='min-w-125px' />,
    id: 'profile',
    Cell: ({ ...props }) => <InfoCell data={{ icon: props.data[props.row.index].image, name: props.data[props.row.index].name  , email:props.data[props.row.index].email}} />,
  },

  {
    Header: (props) => <CustomHeader<User> tableProps={props} title={<Localize value='created_at' />} className='min-w-125px' />,
    id: 'created_at',
    Cell: ({ ...props }) => <CustomCellDate date={props.data[props.row.index]?.created_at} />,

  },
  {
    Header: (props) => (
      <CustomHeader<User> tableProps={props} title={<Localize value='is_enable' />} className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({ ...props }) => <EnableCell isenable={props.data[props.row.index].status} />,
  },
  {
    Header: (props) => (
      <CustomHeader<User> tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export { columnsTable }


