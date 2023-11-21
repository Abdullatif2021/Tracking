import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { QUERIES, initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { getMakerList } from '../../../core/_requests'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'






const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [make, setMake] = useState<string | undefined>("")
  const [model, setModel] = useState<string | undefined>("")
  const [enableApi, setEnableApi] = useState<boolean>(true);
  //#region api
  const {
    data: makers,
  } = useQuery(
    `${QUERIES.VEHICLES_MAKER_LIST_VALUES}`,
    () => {
      return getMakerList()
    },
    {
      enabled: enableApi
    }
  )

  useEffect(() => {
    if (makers)
      setEnableApi(false)
  }, [makers])
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
    updateState({
      filtter: { make ,model},
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col">
            <InputSelectFilter value={make} setValue={setMake} title={intl.formatMessage({ id: 'make' })} options={makers || []} />
          </div>
          <div className="col">
            <InputFilter value={model} setValue={setModel} title={intl.formatMessage({ id: 'model' })} />
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
