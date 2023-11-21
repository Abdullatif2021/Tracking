import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { getVehicleList } from '../../../../core/commonRequests'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [vehicles_id, setVehicle] = useState<string | undefined>("")

  const {
    data: vehicleList,
} = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
        return getVehicleList()
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
)

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: { vehicles_id },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col">
            <InputSelectFilter value={vehicles_id} setValue={setVehicle} title={intl.formatMessage({ id: 'vehicle' })} options={vehicleList ||[]} />
          </div>
         
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
