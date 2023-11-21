import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { getCityList } from '../../../../core/commonRequests'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'






const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [name, setName] = useState<string | undefined>("")
  const [city, setCity] = useState<string | undefined>("")
  const [parent, setParent] = useState<string | undefined>("")

  const [enableApi, setEnableApi] = useState(true)


  const {
    data: cityList,
  } = useQuery(
    `${QUERIES.ALL_City_LIST_VALUES}`,
    () => {
      return getCityList()
    },
    {
      enabled: enableApi
    }
  )
  useEffect(() => {
    if (cityList) {
      setEnableApi(false)
    }
  }, [cityList])
  
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: { name, city,parent},
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
    
          <div className="col-md-6  col-sm-12">
            <InputFilter value={name} setValue={setName} title={intl.formatMessage({ id: 'name' })} />
          </div>
          <div className="col-md-6  col-sm-12">
            <InputFilter value={parent} setValue={setParent} title={intl.formatMessage({ id: 'parent' })} />
          </div>
          <div className="col-md-12  col-sm-12">
            <InputSelectFilter value={city} setValue={setCity} title={intl.formatMessage({ id: 'city' })}  options={cityList || []}/>
          </div>
        
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
