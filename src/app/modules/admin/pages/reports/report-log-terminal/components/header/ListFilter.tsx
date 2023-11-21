import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'

import { getTerminalList, getVehicleList } from '../../../../core/commonRequests'
import { useQuery } from 'react-query'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [date, setDate] = useState<string | undefined>(null)
  const [terminal, setTerminal] = useState<string | undefined>(null)
  const [vehicles_id, setVehicle] = useState<string | undefined>(null)


  const {
    data: vehicleList,
  } = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
      return getVehicleList()
    },
  )

  const {
    data: terminalList,
  } = useQuery(
    `${QUERIES.TERMINAL_LIST_VALUES}`,
    () => {
      return getTerminalList()
    },
  )


  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {

    updateState({
      filtter: { date,vehicles_id,terminal },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col-6">
            <InputFilter value={date} setValue={setDate} title={intl.formatMessage({ id: 'date' })} type={'date'} />
          </div>
          <div className="col-6">
            <InputSelectFilter value={terminal} setValue={setTerminal} title={intl.formatMessage({ id: 'terminal' })} options={terminalList||[]} />
          </div>
          <div className="col-12">
            <InputSelectFilter value={vehicles_id} setValue={setVehicle} title={intl.formatMessage({ id: 'vehicle' })} options={vehicleList || []} />
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
