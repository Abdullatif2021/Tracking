import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { Months, QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'

import { useIntl } from 'react-intl'

import { getVehicleList } from '../../../../core/commonRequests'
import { useQuery } from 'react-query'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [year, setYear] = useState<string | undefined>(null)
  const [month, setMonth] = useState<string | undefined>(null)
  const [vehicles_id, setVehicle] = useState<string | undefined>(null)


  const {
    data: vehicleList,
  } = useQuery(
    `${QUERIES.ALL_Vehicle_LIST_VALUES}`,
    () => {
      return getVehicleList()
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
      filtter: { year,month,vehicles_id },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
 
          <div className="col-6">
            <InputFilter value={year} setValue={setYear} title={intl.formatMessage({ id: 'year' })} type={'year'}    pattern="\d*"    placeholder="YYYY" />
          </div>
          <div className="col-6">
            <InputSelectFilter value={month} setValue={setMonth} title={intl.formatMessage({ id: 'month' })}  options={Months}/>
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
