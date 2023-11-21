// @ts-nocheck
import { Column } from 'react-table'
import { ActionsCell } from './ActionsCell'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { TripDriverReport } from '../../core/_models'
import { Localize } from '../../../../../../../_metronic/i18n/Localize'
import { CustomCell } from './CustomCell'




const columnsTable: ReadonlyArray<Column<TripDriverReport>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<TripDriverReport> tableProps={props} title={<Localize value='driver' />} className='min-w-125px' />,
    accessor: 'driver',
  },
  {
    Header: (props) => <CustomHeader<TripDriverReport> tableProps={props} title={<Localize value='year' />} className='min-w-125px' />,
    accessor: 'year',
  },
  {
    Header: (props) => <CustomHeader<TripDriverReport> tableProps={props} title={<Localize value='month' />} className='min-w-125px' />,
    accessor: 'month',
  },
  {
    Header: (props) => <CustomHeader<TripDriverReport> tableProps={props} title={<Localize value='status_0' />} className='min-w-125px' />,
    id: 'count_status_0',
    Cell: ({...props}) => <CustomCell data={{count : props.data[props.row.index]?.status_0?.length , id:0 }} />,
    
  },
  {
    Header: (props) => <CustomHeader<TripDriverReport> tableProps={props} title={<Localize value='status_1' />} className='min-w-125px' />,
    id: 'count_status_1',
    Cell: ({...props}) => <CustomCell data={{count : props.data[props.row.index]?.status_1?.length , id:1} } />,
  },
  {
    Header: (props) => <CustomHeader<TripDriverReport> tableProps={props} title={<Localize value='status_2' />} className='min-w-125px' />,
    id: 'count_status_2',
    Cell: ({...props}) => <CustomCell data={{count : props.data[props.row.index]?.status_2?.length , id:2 } } />,
  },
  {
    Header: (props) => <CustomHeader<TripDriverReport> tableProps={props} title={<Localize value='status_4' />} className='min-w-125px' />,
    id: 'count_status_4',
    Cell: ({...props}) => <CustomCell data={{count : props.data[props.row.index]?.status_4?.length , id:4 } } />,
  },

]

export { columnsTable }


