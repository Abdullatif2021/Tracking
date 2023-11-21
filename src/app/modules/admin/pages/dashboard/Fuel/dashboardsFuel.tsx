import {useMemo} from 'react'
import {ArrayGroupBy} from '../../../../../../_metronic/helpers'

import {QueryRequestProvider, useQueryRequest} from './core/QueryRequestProvider'
import {
  QueryResponseProvider,
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination,
} from './core/QueryResponseProvider'
import {Spinner} from '../../../../../../_metronic/helpers/components/Spinner'
import {ListPagination} from '../../../../../../_metronic/helpers/components/table/pagination/ListPagination'
import StatisticsWidget8 from '../../../../../../_metronic/partials/widgets/statistics/StatisticsWidget8'
import {useIntl} from 'react-intl'

const Cards = () => {
  const intl = useIntl()
  const items = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const pagination = useQueryResponsePagination()
  const {updateState} = useQueryRequest()
  const data = useMemo(() => items, [items])
  return (
    <>
      <div className='mt-10 mb-2'>
        {/* start Title*/}
        <div className='flex-wrap me-3 my-2 mt-lg-10'>
          <h1 className='text-dark fw-bold fs-3 my-0'>
            {intl.formatMessage({id: 'vehicles_fuel_details'})}
          </h1>
        </div>
        {/* end Title */}

        <div className='row row-cols-1 row-cols-sm-2  row-cols-xl-3'>
          {ArrayGroupBy(data, (item) => item.license_plate.toString()).map((fuelData) => {
            return (
              <StatisticsWidget8
                widgetSelector='#statistic_widget_dashboard_fuel'
                subTitle={intl.formatMessage({id: 'date'})}
                title={'2022-5-24'}
                items={[
                  ...fuelData.items.map((item) => {
                    return {
                      icon: '',
                      title: `${item.license_plate}`,
                      fields: [
                        {name: intl.formatMessage({id: 'liter_cost'}), value: item.cost_liter},
                        {name: intl.formatMessage({id: 'qty'}), value: item.qty},
                        {name: intl.formatMessage({id: 'total_cost'}), value: item.total_cost},
                      ],
                    }
                  }),
                ]}
                
              />
            )
          })}
        </div>

        <ListPagination isLoading={isLoading} pagination={pagination} updateState={updateState} />
        {isLoading && <Spinner />}
      </div>
    </>
  )
}

const ManageDashFuelCardWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <Cards />
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ManageDashFuelCardWrapper}
