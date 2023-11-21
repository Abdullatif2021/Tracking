import { useEffect, useState } from 'react'

import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'

import { useIntl } from 'react-intl'

import { useQuery } from 'react-query'
import { initialQueryState } from '../../../../../../../_metronic/helpers/crud-helper/models'
import { MenuComponent } from '../../../../../../../_metronic/assets/ts/components/MenuComponent'
import { FilterMenuHoc } from '../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../_metronic/helpers/components/fields/InputFilter'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [month, setMonth] = useState<string | undefined>(null)
  const [year, setYear] = useState<string | undefined>(null)

  const [enableApi, setEnableApi] = useState(true)





  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {

    updateState({
      filtter: { year,month },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col-6">
            <InputFilter value={year} setValue={setYear} title={intl.formatMessage({ id: 'year' })}  />
          </div>
          <div className="col-6">
            <InputFilter value={month} setValue={setMonth} title={intl.formatMessage({ id: 'month' })} />
          </div>
      
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
