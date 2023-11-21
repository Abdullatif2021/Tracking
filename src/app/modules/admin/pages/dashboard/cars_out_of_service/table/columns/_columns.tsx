// @ts-nocheck
import {Column} from 'react-table'
import {CustomHeader} from './CustomHeader'
import {CarOutOfServiceData} from '../../core/_models'
import {Localize} from '../../../../../../../../_metronic/i18n/Localize'
import {useIntl} from 'react-intl'
const columnsTable: ReadonlyArray<Column<CarOutOfServiceData>> = [
  {
    Header: (props) => (
      <CustomHeader<CarOutOfServiceData>
        tableProps={props}
        title={<Localize value='license_plate' />}
        className='min-w-125px'
      />
    ),
    accessor: 'license_plate',
  },

  {
    Header: (props) => (
      <CustomHeader<CarOutOfServiceData>
        tableProps={props}
        title={<Localize value='start_date' />}
        className='min-w-125px'
      />
    ),
    accessor: 'start',
  },
  {
    Header: (props) => (
      <CustomHeader<CarOutOfServiceData>
        tableProps={props}
        title={<Localize value='end_date' />}
        className='min-w-125px'
      />
    ),
    accessor: 'end',
  },
]

export {columnsTable}
