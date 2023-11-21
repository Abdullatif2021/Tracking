// @ts-nocheck
import { Column } from 'react-table'
import { ActionsCell } from './ActionsCell'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { User } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { CustomCellDate } from './CustomCellDate'
import { CustomCell } from './CustomCell'
import { CustomCellData } from '../../../../path/manage/table/columns/CustomCellData'
import { genderEnum } from '../../../../core/models'
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
    Header: (props) => <CustomHeader<User> tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },

  {
    Header: (props) => <CustomHeader<User> tableProps={props} title={<Localize value='mobile' />} className='min-w-125px' />,
    id: 'mobile',
    Cell: ({ ...props }) => <CustomCell data={props.data[props.row.index]?.meta_data['phone']} />,
  },
  {
    Header: (props) => <CustomHeader<User> tableProps={props} title={<Localize value='email' />} className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <CustomHeader<User> tableProps={props} title={<Localize value='gender' />} className='min-w-125px' />,
    id: 'gender',
    Cell: ({ ...props }) => <CustomCellData data={genderEnum[props.data[props.row.index]?.meta_data['gender']]} />,
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


