// @ts-nocheck
import {Column} from 'react-table'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {TripReport} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';








const columnsTable :  ReadonlyArray<Column<TripReport>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<TripReport> tableProps={props} title={<Localize value='time' />} className='min-w-125px' />,
    accessor: 'eventTime',
  },
  {
    Header: (props) => <CustomHeader<TripReport> tableProps={props} title={<Localize value='type' />} className='min-w-125px' />,
    accessor: 'type',
  },
 


 
]

export {columnsTable}


