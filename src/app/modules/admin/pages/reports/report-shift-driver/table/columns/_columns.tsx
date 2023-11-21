// @ts-nocheck
import { Column } from 'react-table'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { ShiftDriverReport } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';

const columnsTable: ReadonlyArray<Column<ShiftDriverReport>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<ShiftDriverReport> tableProps={props} title={<Localize value='driver' />} className='min-w-125px' />,
    accessor: 'driver',
  },
  {
    Header: (props) => <CustomHeader<ShiftDriverReport> tableProps={props} title={<Localize value='time_in' />} className='min-w-125px' />,
    accessor: 'time_in',
  },
  {
    Header: (props) => <CustomHeader<ShiftDriverReport> tableProps={props} title={<Localize value='time_out' />} className='min-w-125px' />,
    accessor: 'time_out',
  },

  {
    Header: (props) => <CustomHeader<ShiftDriverReport> tableProps={props} title={<Localize value='total_time' />} className='min-w-125px' />,
    accessor: 'total_time',
  },

]

export { columnsTable }


