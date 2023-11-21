// @ts-nocheck
import {Column} from 'react-table'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {SelectionHeader} from './SelectionHeader'
import { CustomHeader } from './CustomHeader'
import {City} from '../../core/_models'
import { Localize } from '../../../../../../../../_metronic/i18n/Localize'

const columnsTable :  ReadonlyArray<Column<City>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader<City> tableProps={props} title={'#'} className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <CustomHeader<City>  tableProps={props} title={<Localize value='parent' />} className='min-w-125px' />,
    accessor: 'parent',
  },
  {
    Header: (props) => <CustomHeader<City>  tableProps={props} title={<Localize value='name' />} className='min-w-125px' />,
    accessor: 'name',
  },

  {
    Header: (props) => <CustomHeader<City>  tableProps={props} title={<Localize value='country' />} className='min-w-125px' />,
    accessor: 'name_country',
  },

  
  {
    Header: (props) => (
      <CustomHeader<City>  tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell data={props.data[props.row.index]} />,
  },
]

export {columnsTable}


