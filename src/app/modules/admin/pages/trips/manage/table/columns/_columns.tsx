// @ts-nocheck
import { Column } from 'react-table'
import { ActionsCell } from './ActionsCell'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { Trip } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { CustomCellType } from './CustomCellType'
const columnsTable: ReadonlyArray<Column<Trip>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<Trip> tableProps={props} title={'#'} className='min-w-100px' />,
    accessor: 'id',
  },


  {
    Header: (props) => <CustomHeader<Trip> tableProps={props} title={<Localize value='date' />} className='min-w-125px' />,
    accessor: 'date',
  },

  {
    Header: 'from', columns: [ // Grouping column
      {
        Header: (props) => <CustomHeader<Trip> tableProps={props} title={<Localize value='group' />} className='min-w-100px' />,
        accessor: 'from_group',
      },
      {
        Header: (props) => <CustomHeader<Trip> tableProps={props} title={<Localize value='building' />} className='min-w-100px' />,
        accessor: 'from_building',
      },
      {
        Header: (props) => <CustomHeader<Trip> tableProps={props} title={<Localize value='region' />} className='min-w-100px' />,
        accessor: 'from_region',
      },
    ]
  },
  {
    Header: 'to', columns: [ // Grouping column
     
      {
        Header: (props) => <CustomHeader<Trip> tableProps={props} title={<Localize value='group' />} className='min-w-100px' />,
        accessor: 'to_group',
      },
      {
        Header: (props) => <CustomHeader<Trip> tableProps={props} title={<Localize value='building' />} className='min-w-100px' />,
        accessor: 'to_building',
      },
      {
        Header: (props) => <CustomHeader<Trip> tableProps={props} title={<Localize value='region' />} className='min-w-100px' />,
        accessor: 'to_region',
      },
    ]
  },




  {
    Header: (props) => (
      <CustomHeader<VehicleType> tableProps={props} title={<Localize value='type' />} className='min-w-100px' />
    ),
    id: 'type',
    Cell: ({ ...props }) => <CustomCellType type={props.data[props.row.index].type} />,
  },
  {
    Header: (props) => (
      <CustomHeader<VehicleColor> tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <ActionsCell id={props.data[props.row.index]?.id} />,
  },
]

export { columnsTable }


