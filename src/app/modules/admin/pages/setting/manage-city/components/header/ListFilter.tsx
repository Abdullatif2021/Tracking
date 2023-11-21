import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { getCountryList, getRegiosList } from '../../../../core/commonRequests'
import { useQuery } from 'react-query'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'






const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [name, setName] = useState<string | undefined>("")
  const [country, setCountry] = useState<string | undefined>("")
  const [parent, setParent] = useState<string | undefined>("")


  
  const [enableApi, setEnableApi] = useState(true)


  const {
    data: countryList,
  } = useQuery(
    `${QUERIES.ALL_Country_LIST_VALUES}`,
    () => {
      return getCountryList()
    },
    {
      enabled: enableApi
    }
  )
  useEffect(() => {
    if (countryList) {
      setEnableApi(false)
    }
  }, [countryList])
  
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: { name,country,parent },
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
            <InputSelectFilter value={country} setValue={setCountry} title={intl.formatMessage({ id: 'country' })} options={countryList || []} />
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
