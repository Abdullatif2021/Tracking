// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {AdsPath} from '../../core/_models'
import {Localize} from '../../../../../../../../../_metronic/i18n/Localize' 
const columnsTable :  ReadonlyArray<Column<Ads>> = [
  // {
  //   Header: (props) => <SelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <CustomHeader<AdsPath> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <CustomHeader<AdsPath>  tableProps={props} title={<Localize value='license_plate' />} className='min-w-125px' />,
    accessor: 'license_plate',
  },

  {
    Header: (props) => (
      <CustomHeader<Ads>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


