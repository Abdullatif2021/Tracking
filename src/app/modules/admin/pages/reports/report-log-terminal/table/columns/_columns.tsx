// @ts-nocheck
import { Column } from 'react-table'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { LogTerminal } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';




const columnsTable: ReadonlyArray<Column<LogTerminal>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<LogTerminal> tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <CustomHeader<LogTerminal> tableProps={props} title={<Localize value='vehicles_count' />} className='min-w-125px' />,
    accessor: 'vehicles_count',
  },
  {
    Header: (props) => <CustomHeader<LogTerminal> tableProps={props} title={<Localize value='date' />} className='min-w-125px' />,
    accessor: 'date',
  },

]

export { columnsTable }


