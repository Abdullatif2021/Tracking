// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {StopReport} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';
const columnsTable :  ReadonlyArray<Column<StopReport>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='deviceName' />} className='min-w-125px' />,
    accessor: 'deviceName',
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='startTime' />} className='min-w-125px' />,
    accessor: 'startTime',
  },
  {
    Header: (props) => <CustomHeader<StopReport> tableProps={props} title={<Localize value='endTime' />} className='min-w-125px' />,
    accessor: 'endTime',
  },
  {
    Header: (props) => <CustomHeader<StopReport>  tableProps={props} title={<Localize value='distance' />} className='min-w-125px' />,
    accessor: 'distance',
  },
  {
    Header: (props) => <CustomHeader<StopReport>  tableProps={props} title={<Localize value='address' />} className='min-w-125px' />,
    accessor: 'address',
  },
  {
    Header: (props) => <CustomHeader<StopReport>  tableProps={props} title={<Localize value='duration' />} className='min-w-125px' />,
    accessor: 'duration',
  },
  {
    Header: (props) => <CustomHeader<StopReport>  tableProps={props} title={<Localize value='spentFuel' />} className='min-w-125px' />,
    accessor: 'spentFuel',
  },
]

export {columnsTable}


