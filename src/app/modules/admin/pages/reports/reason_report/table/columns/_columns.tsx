// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {ReasonReport} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';


const columnsTable :  ReadonlyArray<Column<ReasonReport>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<TripReport> tableProps={props} title={<Localize value='reason' />} className='min-w-125px' />,
    accessor: 'reason',
  },
  {
    Header: (props) => <CustomHeader<TripReport> tableProps={props} title={<Localize value='count_driver' />} className='min-w-125px' />,
    accessor: 'count_driver',
  },
  {
    Header: (props) => <CustomHeader<TripReport> tableProps={props} title={<Localize value='count_passenger' />} className='min-w-125px' />,
    accessor: 'count_passenger',
  },

 


 
]

export {columnsTable}


