// @ts-nocheck
import {Column} from 'react-table'
import { CustomHeader } from './CustomHeader'
import {SessionHistory} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'
const columnsTable :  ReadonlyArray<Column<SessionHistory>> = [
  {
    Header: (props) => <CustomHeader<SessionHistory> tableProps={props} title={<Localize value='date' />} className='min-w-125px' />,
    accessor: 'date',
  },

 
  {
    Header: (props) => <CustomHeader<SessionHistory>  tableProps={props} title={<Localize value='start_time' />} className='min-w-125px' />,
    accessor: 'start_time',
  },
  {
    Header: (props) => <CustomHeader<SessionHistory>  tableProps={props} title={<Localize value='end_time' />} className='min-w-125px' />,
    accessor: 'end_time',
  },
  {
    Header: (props) => <CustomHeader<SessionHistory>  tableProps={props} title={<Localize value='vehicles' />} className='min-w-125px' />,
    accessor: 'vehicles',
  },
  

]

export {columnsTable}


