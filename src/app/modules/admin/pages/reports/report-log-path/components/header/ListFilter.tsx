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
  const [date, setDate] = useState<string | undefined>(null)
  const [path, setPath] = useState<string | undefined>(null)
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
      filtter: { date,vehicles_id,path },
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
            <InputFilter value={path} setValue={setPath} title={intl.formatMessage({ id: 'path' })} />
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
