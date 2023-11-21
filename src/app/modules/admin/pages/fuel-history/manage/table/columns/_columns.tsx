// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import { MeterCell } from './MeterCell'
import { CustomHeader } from './CustomHeader'
import {FuelHistory} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize';
import { IconCell } from '../../../../../../../../_metronic/helpers/components/table/columns/IconCell';
const columnsTable :  ReadonlyArray<Column<FuelHistory>> = [
  // {
  //   Header: (props) => <SelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  // },
  
  {
    Header: (props) => <CustomHeader<FuelHistory> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <CustomHeader<FuelHistory>  tableProps={props} title={<Localize value='image' />} className='min-w-125px' />,
    id: 'image',
    Cell: ({...props}) => <IconCell icon={props.data[props.row.index].image} />,
  },


  {
    Header: (props) => <CustomHeader<FuelHistory>  tableProps={props} title={<Localize value='qty' />} className='min-w-125px' />,
    accessor: 'qty',
  },

  {
    Header: (props) => <CustomHeader<FuelHistory>  tableProps={props} title={<Localize value='cost' />} className='min-w-125px' />,
    accessor: 'cost_per_unit',
  },
  {
    Header: (props) => <CustomHeader<FuelHistory>  tableProps={props} title={<Localize value='meter' />} className='min-w-125px' />,
    id: 'meter',
    Cell: ({...props}) => <MeterCell data={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <CustomHeader<FuelHistory>  tableProps={props} title={<Localize value='consumption' />} className='min-w-125px' />,
    accessor: 'consumption',
  },
  {
    Header: (props) => <CustomHeader<FuelHistory>  tableProps={props} title={<Localize value='province' />} className='min-w-125px' />,
    accessor: 'province',
  },
  {
    Header: (props) => (
      <CustomHeader<FuelHistory>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


