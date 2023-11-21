// @ts-nocheck
import {Column} from 'react-table'
import { CustomHeader } from './CustomHeader'
import {AdsPath} from '../../core/_models'
import {Localize} from '../../../../../../../../../_metronic/i18n/Localize' ;
import { ActionsCell } from './ActionsCell';
const columnsTable :  ReadonlyArray<Column<Ads>> = [
  {
    Header: (props) => <CustomHeader<AdsPath>  tableProps={props} title={<Localize value='exp_name' />} className='min-w-125px' />,
    accessor: 'exp_name',
  },
  {
    Header: (props) => <CustomHeader<AdsPath>  tableProps={props} title={<Localize value='exp_amount' />} className='min-w-125px' />,
    accessor: 'exp_amount',
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


