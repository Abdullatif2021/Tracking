// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {VehicleColor} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { ColorCell } from './ColorCell'
const columnsTable :  ReadonlyArray<Column<VehicleColor>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<VehicleColor> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },

  {
    Header: (props) => <CustomHeader<VehicleColor>  tableProps={props} title={<Localize value='color' />} className='min-w-125px' />,
    Cell: ({...props}) => <ColorCell color={props.data[props.row.index].color} />,
    id: 'color',
  },
  {
    Header: (props) => <CustomHeader<VehicleColor>  tableProps={props} title={<Localize value='code' />} className='min-w-125px' />,
    accessor: 'code',
  },
  {
    Header: (props) => <CustomHeader<VehicleColor>  tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <CustomHeader<VehicleColor>  tableProps={props} title={<Localize value='time_in' />} className='min-w-125px' />,
    accessor: 'time_in',
  },
  {
    Header: (props) => <CustomHeader<VehicleColor>  tableProps={props} title={<Localize value='time_out' />} className='min-w-125px' />,
    accessor: 'time_out',
  },
  
  {
    Header: (props) => (
      <CustomHeader<VehicleColor>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


