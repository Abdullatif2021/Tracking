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
    Header: (props) => <CustomHeader<Region>  tableProps={props} title={<Localize value='type' />} className='min-w-125px' />,
    id: 'type',
    Cell: ({...props}) => <CustomCellData data={TripType[props.data[props.row.index]?.type]} />,
  },

  {
    Header: (props) => <CustomHeader<Region>  tableProps={props} title={<Localize value='city' />} className='min-w-125px' />,
    accessor: 'city_name',
  },

  {
    Header: (props) => <CustomHeader<Region>  tableProps={props} title={<Localize value='longitude' />} className='min-w-125px' />,
    accessor: 'longitude',
  },
  {
    Header: (props) => <CustomHeader<Region>  tableProps={props} title={<Localize value='Latitude' />} className='min-w-125px' />,
    accessor: 'Latitude',
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


