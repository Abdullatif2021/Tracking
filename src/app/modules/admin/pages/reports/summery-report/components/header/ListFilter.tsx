import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { getVehicleList } from '../../../../core/commonRequests'
import { useQuery } from 'react-query'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [from, setFrom] = useState<string | undefined>(null)
  const [to, setTo] = useState<string | undefined>(null)
  const [deviceId, setDevice] = useState<string | undefined>(null)
  const [enableApi, setEnableApi] = useState(true)


  const {
    data: vehicleList,
  } = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
      return getVehicleList()
    },
    {
      enabled: enableApi
    }
  )

  useEffect(() => {
    if (vehicleList) {
      setEnableApi(false)
    }
  }, [vehicleList])

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {

    updateState({
      filtter: { from,to,deviceId },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col-6">
            <InputFilter value={from} setValue={setFrom} title={intl.formatMessage({ id: 'from' })} type={'date'} />
          </div>
          <div className="col-6">
            <InputFilter value={to} setValue={setTo} title={intl.formatMessage({ id: 'to' })} type={'date'} />
          </div>
          <div className="col-12">
            <InputSelectFilter value={deviceId} setValue={setDevice} title={intl.formatMessage({ id: 'device' })} options={vehicleList || []} />
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
