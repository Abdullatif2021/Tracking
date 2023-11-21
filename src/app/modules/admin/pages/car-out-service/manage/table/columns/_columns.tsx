// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {CarOutService} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
const columnsTable :  ReadonlyArray<Column<CarOutService>> = [
  // {
  //   Header: (props) => <SelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  // },
  
  {
    Header: (props) => <CustomHeader<CarOutService> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <CustomHeader<CarOutService>  tableProps={props} title={<Localize value='license_plate' />} className='min-w-125px' />,
    accessor: 'license_plate',
  },

  {
    Header: (props) => <CustomHeader<CarOutService>  tableProps={props} title={<Localize value='start' />} className='min-w-125px' />,
    accessor: 'start',
  },
  {
    Header: (props) => <CustomHeader<CarOutService>  tableProps={props} title={<Localize value='end' />} className='min-w-125px' />,
    accessor: 'end',
  },
  {
    Header: (props) => <CustomHeader<CarOutService>  tableProps={props} title={<Localize value='period' />} className='min-w-125px' />,
    accessor: 'period',
  },
  {
    Header: (props) => <CustomHeader<CarOutService>  tableProps={props} title={<Localize value='reason' />} className='min-w-125px' />,
    accessor: 'reason',
  },

  {
    Header: (props) => (
      <CustomHeader<CarOutService>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


