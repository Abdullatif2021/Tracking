// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import {CustomHeader} from './CustomHeader'
import {Path} from '../../core/_models'
import {Localize} from '../../../../../../../../_metronic/i18n/Localize'
import { CustomeCell } from './CustomCell'
const columnsTable: ReadonlyArray<Column<Path>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <CustomHeader<Path> tableProps={props} title={'#'} className='min-w-125px' />
    ),
    accessor: 'id',
  },

  {
    Header: (props) => (
      <CustomHeader<Path>
        tableProps={props}
        title={<Localize value='name' />}
        className='min-w-125px'
      />
    ),
    accessor: 'name',
  },
  {
    Header: (props) => (
      <CustomHeader<Path>
        tableProps={props}
        title={<Localize value='terminals' />}
        className='min-w-125px'
      />
    ),
    id: 'path_terminal',
    Cell: ({...props}) => <CustomeCell data={props.data[props.row.index].path_terminal} />,
  },
  {
    Header: (props) => (
      <CustomHeader<Terminal> tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}
