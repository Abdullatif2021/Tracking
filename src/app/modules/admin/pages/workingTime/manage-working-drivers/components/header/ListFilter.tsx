import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { getDriverList, getRegiosList, getShiftList, getVehicleList } from '../../../../core/commonRequests'
import { useQuery } from 'react-query'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'



const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [enableApi, setEnableApi] = useState(true)
  const [driver_id, setDriver] = useState<string | undefined>("")
  const [region_id, setRegion] = useState<string | undefined>("")
  const [shift_id, setShift] = useState<string | undefined>("")

  const {
    data: driverList,
  } = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
      return getDriverList()
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
    if (regiosList &&shiftList && driverList ) {
      setEnableApi(false)
    }
  }, [regiosList])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
    updateState({
      filtter: { driver_id, region_id,shift_id },
      //  ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">

          <div className="col-12">
            <InputSelectFilter value={driver_id} setValue={setDriver} title={intl.formatMessage({ id: 'driver' })} options={driverList || []} />
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
