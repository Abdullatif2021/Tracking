// @ts-nocheck
import {Column} from 'react-table'
import { CustomHeader } from './CustomHeader'
import { SessionDriver } from '../../../core/models'
import { Localize } from '../../../../../../../_metronic/i18n/Localize'
const columnsTable :  ReadonlyArray<Column<SessionDriver>> = [
  {
    Header: (props) => <CustomHeader<SessionHistory>  tableProps={props} title={<Localize value='start_time' />} className='min-w-125px' />,
    accessor: 'start_time',
  },
  {
    Header: (props) => <CustomHeader<SessionHistory>  tableProps={props} title={<Localize value='end_time' />} className='min-w-125px' />,
    accessor: 'end_time',
  },
]

export {columnsTable}


