// @ts-nocheck
import { Column } from 'react-table'
import { ActionsCell } from './ActionsCell'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { SummeryReport } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';
import { CustomCell } from './CustomCell'



const columnsTable: ReadonlyArray<Column<SummeryReport>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<SummeryReport> tableProps={props} title={<Localize value='deviceName' />} className='min-w-125px' />,
    accessor: 'deviceName',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport> tableProps={props} title={<Localize value='startTime' />} className='min-w-125px' />,
    accessor: 'startTime',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport> tableProps={props} title={<Localize value='endTime' />} className='min-w-125px' />,
    accessor: 'endTime',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport>  tableProps={props} title={<Localize value='averageSpeed' />} className='min-w-125px' />,
    accessor: 'averageSpeed',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport>  tableProps={props} title={<Localize value='maxSpeed' />} className='min-w-125px' />,
    accessor: 'maxSpeed',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport>  tableProps={props} title={<Localize value='distance' />} className='min-w-125px' />,
    accessor: 'distance',
  },

  {
    Header: (props) => <CustomHeader<SummeryReport>  tableProps={props} title={<Localize value='startOdometer' />} className='min-w-125px' />,
    accessor: 'startOdometer',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport>  tableProps={props} title={<Localize value='endOdometer' />} className='min-w-125px' />,
    accessor: 'endOdometer',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport>  tableProps={props} title={<Localize value='engineHours' />} className='min-w-125px' />,
    accessor: 'engineHours',
  },
  {
    Header: (props) => <CustomHeader<SummeryReport>  tableProps={props} title={<Localize value='spentFuel' />} className='min-w-125px' />,
    accessor: 'spentFuel',
  },

]

export { columnsTable }


