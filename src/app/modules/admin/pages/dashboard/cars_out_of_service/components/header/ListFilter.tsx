import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {initialQueryState} from '../../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {useIntl} from 'react-intl'
import {FilterMenuHoc} from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import {InputSelectFilter} from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'

const ListFilter = () => {
  const intl = useIntl()
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()
  const [type, setType] = useState<string | undefined>('week')
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({filtter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filtter: {type},
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className='row'>
          <div className='col'>
            <InputSelectFilter
              options={[
                {value: intl.formatMessage({id: 'week'}), text: intl.formatMessage({id: 'week'})},
                {value: intl.formatMessage({id: 'month'}), text: intl.formatMessage({id: 'month'})},
              ]}
              value={type}
              setValue={setType}
              title={intl.formatMessage({id: 'type'})}
            />
          </div>  
          <div>


          </div>
          {/* <div className='col'>
            <InputFilter
              value={model}
              setValue={setModel}
              title={intl.formatMessage({id: 'model'})}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputFilter value={type} setValue={setType} title={intl.formatMessage({id: 'type'})} />
          </div>
          <div className='col'>
            <CheckBoxFilter
              value={in_service}
              setValue={setInService}
              title={intl.formatMessage({id: 'in_service'})}
            />
          </div>*/}
        </div>
      </FilterMenuHoc>
    </>
  )
}

export {ListFilter}
