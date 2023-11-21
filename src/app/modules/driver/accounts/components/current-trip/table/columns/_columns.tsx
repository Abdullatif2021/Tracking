// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {CustomCell} from '../.../../../../../../../../../_metronic/helpers/components/table/columns/CustomCell'
import { CustomHeader } from './CustomHeader'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
import { DriverStatus, TripDriver, TripType } from '../../../../core/Model'
const columnsTable :  ReadonlyArray<Column<TripDriver>> = [
  {
    Header: (props) => <CustomHeader<TripDriver> tableProps={props} title={'#'} className='min-w-50px' />,
    accessor: 'id',
  },
 
  {
    Header: (props) => <CustomHeader<TripDriver>  tableProps={props} title={<Localize value='date' />} className='min-w-125px' />,
    accessor: 'date',
  },
  {
    Header: (props) => <CustomHeader<TripDriver>  tableProps={props} title={<Localize value='fromGroup' />} className='min-w-100px' />,
    accessor: 'from_group',
  },
  {
    Header: (props) => <CustomHeader<TripDriver>  tableProps={props} title={<Localize value='fromBuilding' />} className='min-w-100px' />,
    accessor: 'from_building',
  },
  {
    Header: (props) => <CustomHeader<TripDriver>  tableProps={props} title={<Localize value='toGroup' />} className='min-w-100px' />,
    accessor: 'to_group',
  },
  {
    Header: (props) => <CustomHeader<TripDriver>  tableProps={props} title={<Localize value='toBuilding' />} className='min-w-100px' />,
    accessor: 'to_building',
  },
  {
    Header: (props) => <CustomHeader<TripDriver>  tableProps={props} title={<Localize value='note' />} className='min-w-100px' />,
    accessor: 'note',
  },

  
  // {
  //   Header: (props) => <CustomHeader<Trip>  tableProps={props} title={<Localize value='toRegion' />} className='min-w-100px' />,
  //   accessor: 'to_region',
  // },
  // {
  //   Header: (props) => <CustomHeader<Trip>  tableProps={props} title={<Localize value='toGroup' />} className='min-w-100px' />,
  //   accessor: 'to_group',
  // },
  // {
  //   Header: (props) => <CustomHeader<Trip>  tableProps={props} title={<Localize value='toBuilding' />} className='min-w-100px' />,
  //   accessor: 'to_building',
  // },
  {
    Header: (props) => (
      <CustomHeader<TripDriver>  tableProps={props} title= {<Localize value='type' /> }   className='min-w-100px' />
    ),
    id: 'type',
    Cell: ({...props}) => <CustomCell data={<Localize value={TripType[props.data[props.row.index].type]} /> } />,
  },
  {
    Header: (props) => (
      <CustomHeader<TripDriver>  tableProps={props} title= {<Localize value='status' /> }   className='min-w-80px' />
    ),
    id: 'status',
    Cell: ({...props}) => <CustomCell data={<Localize value={DriverStatus[props.data[props.row.index].status]} />  } />,
  },

  {
    Header: (props) => (
      <CustomHeader<TripDriver>  tableProps={props} title='Actions' className='text-end min-w-100px '  />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },

]

export {columnsTable}


