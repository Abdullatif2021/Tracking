import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'

import { useIntl } from 'react-intl'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'






const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [month, setMonth] = useState<string | undefined>(null)
  const [year, setYear] = useState<string | undefined>(null)







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
