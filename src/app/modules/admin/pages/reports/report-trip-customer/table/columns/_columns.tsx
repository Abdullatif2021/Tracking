// @ts-nocheck
import { Column } from 'react-table'
import { ActionsCell } from './ActionsCell'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { StopReport } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';
import { CustomCell } from './CustomCell'




const columnsTable: ReadonlyArray<Column<StopReport>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='customer' />} className='min-w-125px' />,
    accessor: 'customer',
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='year' />} className='min-w-125px' />,
    accessor: 'year',
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='month' />} className='min-w-125px' />,
    accessor: 'month',
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='status_0' />} className='min-w-125px' />,
    accessor: 'count_status_0',
    
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='status_1' />} className='min-w-125px' />,
    accessor: 'count_status_1',
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='status_2' />} className='min-w-125px' />,
    accessor: 'count_status_2',
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='status_4' />} className='min-w-125px' />,
    id: 'count_status_4',
    Cell: ({...props}) => <CustomCell count={props.data[props.row.index]?.status_4} />,
  },



]

export { columnsTable }


