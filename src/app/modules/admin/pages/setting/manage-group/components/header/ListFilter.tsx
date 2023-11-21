import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {QUERIES, initialQueryState} from '../../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {useIntl} from 'react-intl'
import {useQuery} from 'react-query'
import {getRegiosList} from '../../../../core/commonRequests'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'


const ListFilter = () => {
  const intl = useIntl()
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()
  const [parent, setParent] = useState<string | undefined>('')
  const [name, setName] = useState<string | undefined>('')
  const [region, setRegion] = useState<string | undefined>('')
  const [enableApi, setEnableApi] = useState(true)

  const {data: regiosList} = useQuery(
    `${QUERIES.ALL_REGION_Working_LIST_VALUES}`,
    () => {
      return getRegiosList()
    },
    {
      enabled: enableApi,
    }
  )

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])
  useEffect(() => {
    if (regiosList) {
      setEnableApi(false)
    }
  }, [regiosList])
  const resetData = () => {
    updateState({filtter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filtter: {name,region,parent},
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className='row'>
          <div className='col-md-6  col-sm-12'>
            <InputFilter value={parent} setValue={setParent} title={intl.formatMessage({id: 'parent'})} />
          </div>
          <div className='col-md-6  col-sm-12'>
            <InputFilter value={name} setValue={setName} title={intl.formatMessage({id: 'name'})} />
          </div>
          <div className='col-md-6  col-sm-12'>
          <InputSelectFilter value={region} setValue={setRegion} title={intl.formatMessage({ id: 'region' })} options={regiosList || []} />
          </div>


        </div>
      </FilterMenuHoc>
    </>
  )
}

export {ListFilter}
