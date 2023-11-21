import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { getRegiosList, getShiftList, getVehicleList } from '../../../../core/commonRequests'
import { useQuery } from 'react-query'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'



const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [enableApi, setEnableApi] = useState(true)
  const [vehicles_id, setVehicle] = useState<string | undefined>("")
  const [region_id, setRegion] = useState<string | undefined>("")
  const [shift_id, setShift] = useState<string | undefined>("")

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


  const {
    data: shiftList,
  } = useQuery(
    `${QUERIES.ALL_SHIFT_LIST_VALUES}`,
    () => {
      return getShiftList()
    },
    {
      enabled: enableApi
    }
  )

  const {
    data: regiosList,
  } = useQuery(
    `${QUERIES.ALL_REGION_Working_LIST_VALUES}`,
    () => {
      return getRegiosList()
    },
    {
      enabled: enableApi
    }
  )
  useEffect(() => {
    MenuComponent.reinitialization()
   
  }, [])

  useEffect(() => {
    if (regiosList &&shiftList && vehicleList ) {
      setEnableApi(false)
    }
  }, [regiosList])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
    updateState({
      filtter: { vehicles_id, region_id,shift_id },
      //  ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">

          <div className="col-12">
            <InputSelectFilter value={vehicles_id} setValue={setVehicle} title={intl.formatMessage({ id: 'vehicle' })} options={vehicleList || []} />
          </div>
          <div className="col">
            <InputSelectFilter value={region_id} setValue={setRegion} title={intl.formatMessage({ id: 'region' })} options={regiosList || []} />
          </div>
          <div className="col">
            <InputSelectFilter value={shift_id} setValue={setShift} title={intl.formatMessage({ id: 'shift' })} options={shiftList || []} />
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
