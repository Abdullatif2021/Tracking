// @ts-nocheck
import { Column } from 'react-table'
import { EnableCell } from './EnableCell'
import { ActionsCell } from './ActionsCell'
import { SelectionCell } from './SelectionCell'
import { SelectionHeader } from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import { IconCell } from './IconCell'
import { InfoCell } from '../../../../../../../../_metronic/helpers/components/table/columns/InfoCell'
import { VehicleType } from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
const columnsTable: ReadonlyArray<Column<VehicleType>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<VehicleType> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },

  {
    Header: (props) => <CustomHeader<VehicleMaker> tableProps={props} title={<Localize value='picture' />} className='min-w-125px' />,
    id: 'image',
    Cell: ({ ...props }) => <InfoCell data={{ icon: props.data[props.row.index].icon, name: props.data[props.row.index]?.vehicletype }} />,
  },

  // {
  //   Header: (props) => <CustomHeader<VehicleType>  tableProps={props} title={<Localize value='icon' />} className='min-w-125px' />,
  //   id: 'icon',
  //   Cell: ({...props}) => <IconCell icon={props.data[props.row.index].icon} />,
  // },

  // {
  //   Header: (props) => <CustomHeader<VehicleType>  tableProps={props} title={<Localize value='vehicle_type' />} className='min-w-125px' />,
  //   accessor: 'vehicletype',
  // },
  {
    Header: (props) => <CustomHeader<VehicleType> tableProps={props} title={<Localize value='display_name' />} className='min-w-125px' />,
    accessor: 'displayname',
  },
  {
    Header: (props) => <CustomHeader<VehicleType> tableProps={props} title={<Localize value='no_seats' />} className='min-w-125px' />,
    accessor: 'seats',
  },
  {
    Header: (props) => (
      <CustomHeader<VehicleType> tableProps={props} title={<Localize value='is_enable' />} className='min-w-125px' />
    ),
    id: 'isenable',
    Cell: ({ ...props }) => <EnableCell isenable={props.data[props.row.index].isenable} />,
  },

  {
    Header: (props) => (
      <CustomHeader<VehicleType> tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <ActionsCell id={props.data[props.row.index].id} />,
  },
]

export { columnsTable }


