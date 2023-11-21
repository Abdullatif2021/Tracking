// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {Region} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { CustomCellData } from '../../../../path/manage/table/columns/CustomCellData'
import { TripType } from '../../../../trips/manage/core/_models'

const columnsTable :  ReadonlyArray<Column<Region>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<Region> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <CustomHeader<Region>  tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },


  {
    Header: (props) => <CustomHeader<Region>  tableProps={props} title={<Localize value='building' />} className='min-w-125px' />,
    accessor: 'building_name',
  },

  {
    Header: (props) => <CustomHeader<Region>  tableProps={props} title={<Localize value='floor_number' />} className='min-w-125px' />,
    accessor: 'floor_number',
  },

  {
    Header: (props) => (
      <CustomHeader<Region>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


