// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { EnableCell } from '../../../../../../../../_metronic/helpers/components/table/columns/EnableCell'


const columnsTable :  ReadonlyArray<Column<PartCar>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<PartCar> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },

  {
    Header: (props) => <CustomHeader<PartCar>  tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <CustomHeader<PartCar>  tableProps={props} title={<Localize value='top' />} className='min-w-125px' />,
    accessor: 'top',
  },
  {
    Header: (props) => <CustomHeader<PartCar>  tableProps={props} title={<Localize value='left' />} className='min-w-125px' />,
    accessor: 'left',
  },
  {
    Header: (props) => <CustomHeader<PartCar>  tableProps={props} title={<Localize value='maintenance' />} className='min-w-125px' />,
    id: 'maintenance',
    Cell: ({...props}) => <EnableCell isenable={props.data[props.row.index]?.maintenance} />,
  },

  
  {
    Header: (props) => (
      <CustomHeader<PartCar>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


