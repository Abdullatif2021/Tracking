// @ts-nocheck
import { Column } from 'react-table'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { LogPath } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';




const columnsTable: ReadonlyArray<Column<LogPath>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<LogPath> tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <CustomHeader<LogPath> tableProps={props} title={<Localize value='start_path' />} className='min-w-125px' />,
    accessor: 'start_path',
  },
  {
    Header: (props) => <CustomHeader<LogPath> tableProps={props} title={<Localize value='end_path' />} className='min-w-125px' />,
    accessor: 'end_path',
  },
  {
    Header: (props) => <CustomHeader<LogPath> tableProps={props} title={<Localize value='date' />} className='min-w-125px' />,
    accessor: 'date',
  },

]

export { columnsTable }


