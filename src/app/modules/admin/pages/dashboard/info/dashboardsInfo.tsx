import {useMemo} from 'react'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {
  QueryResponseProvider,
  useQueryResponseData,
  useQueryResponseLoading,
} from './core/QueryResponseProvider'
import {Spinner} from '../../../../../../_metronic/helpers/components/Spinner'
import ChartWidget9 from '../../../../../../_metronic/partials/widgets/charts/ChartWidget9'
import StatisticsWidget7 from '../../../../../../_metronic/partials/widgets/statistics/StatisticsWidget7'
import {useIntl} from 'react-intl'

const DashboardsInfo = () => {
  const intl = useIntl()
  const items = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => items, [items])

  let cardsCount = items.users.length + 3
  let xl_cardsCount =
    cardsCount % 6 === 0 ? 6 : cardsCount % 5 === 0 ? 5 : cardsCount % 4 === 0 ? 4 : 3
  let sm_cardsCount = cardsCount % 4 === 0 ? 4 : 3

  let maxXY = items.users.reduce((prevObj, currentObj) => {
    return prevObj.count > currentObj.count ? prevObj : currentObj
  })

  let series = [
    ...items.users,
    {type: 'Session', count: items.session},
    {
      type: 'Active Vehicle',
      count: items.vehicles[0].vehicles_active,
    },
    {
      type: 'Inactive Vehicle',
      count: items.vehicles[0].vehicles_not_active,
    },
  ].sort((a, b) => {
    if (a.count < b.count) {
      return -1
    } else if (a.count > b.count) {
      return 1
    }
    return 0
  })

  let helperCount = 1,
    helperObjectCount = series[0].count

  const chartOptions = {
    series: [
      ...series.map((serie) => {
        if (helperObjectCount !== serie.count) {
          helperObjectCount = serie.count
          helperCount = 1
        }
        return {
          name: serie.type,
          data: [
            {
              x:
                series.filter((item) => Number(item.count) === serie.count).length > 1
                  ? serie.count + helperCount++
                  : serie.count,
              y: serie.count,
              z: serie.count,
            },
          ],
        }
      }),
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bubble',
      height: 500,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bubble: {
        distributed: true,
        minBubbleRadius: 10,
        maxBubbleRadius: 50,
      },
    },
    colors: [
      '#33b2df',
      '#546E7A',
      '#d4526e',
      '#13d8aa',
      '#A5978B',
      '#2b908f',
      '#f9a3a4',
      '#90ee7e',
      '#f48024',
      '#69d2e7',
    ],
    stroke: {
      show: true,
      width: 0,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center',
      width: undefined,
      itemMargin: {
        horizontal: 20,
        vertical: 5,
      },
      formatter: function (seriesName: string, opts: any) {
        return [seriesName]
      },
    },

    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      x: {
        formatter: function (val: any) {
          return ''
        },
      },
      y: {
        formatter: function (val: any) {
          return val
        },
      },
      z: {
        formatter: function (val: any) {
          return null
        },
      },
    },
    xaxis: {
      min: -1, //minXY.count - 5,
      max: maxXY.count + 5,
      labels: {
        formatter: function (value: string) {
          return ''
        },
      },
    },
    yaxis: {
      min: -1, //minXY.count - 5,
      max: maxXY.count + 5,
      labels: {
        formatter: function (value: string) {
          return Number(value) === -1 ? '' : Math.round(Number(value))
        },
      },
    },
  }

  return (
    <>
      {/*Start:: Performance Overview Section */}
      <>
        <div className='my-2'>
          {/* start Title */}
          <div className='flex-wrap me-3 mb-4 '>
            <h1 className='text-dark fw-bold fs-3 my-0'>
              {intl.formatMessage({id: 'finance_performance'})}
            </h1>
          </div>
          {/* end Title */}

          <div
            className={`row row-cols-2 row-cols-sm-${sm_cardsCount} row-cols-xl-${xl_cardsCount} mb-5`}
          >
            {data.users &&
              data.users.map((user, index) => {
                return (
                  <StatisticsWidget7
                    title={user.type}
                    count={user.count}
                    key={index + user.type + user.count}
                  />
                )
              })}
            {
              <StatisticsWidget7
                title={intl.formatMessage({id: 'sessions'})}
                count={data.session}
                key={'sessions-' + data.session}
              />
            }

            {
              <StatisticsWidget7
                title={intl.formatMessage({id: 'active_vehicles'})}
                count={data.vehicles[0].vehicles_active}
                key={'active-vehicles-' + data.vehicles[0].vehicles_active}
              />
            }
            {
              <StatisticsWidget7
                title={intl.formatMessage({id: 'inactive_vehicles'})}
                count={data.vehicles[0].vehicles_not_active}
                key={'inactive-vehicles-' + data.vehicles[0].vehicles_not_active}
              />
            }
          </div>
        </div>
      </>
      {/*End:: Performance Overview Section */}

      {/*Start:: Finance Performance Section */}
      <>
        <div className='my-2'>
          {/* start Title*/}
          <div className='flex-wrap me-3 mb-4 '>
            <h1 className='text-dark fw-bold fs-3 my-0'>
              {intl.formatMessage({id: 'performance_overview'})}
            </h1>
            <h3 className='text-muted fs-6 my-2'>
              {intl.formatMessage({id: 'users_from_all_channels'})}
            </h3>
          </div>
          {/* end Title */}

          <div className='row gy-5 g-xl-10 bg-white m-1 rounded'>
            <ChartWidget9
              toggleSelector='#kt_chart_widget_8_week_toggle'
              chartSelector='#kt_chart_widget_8_week_chart'
              options={chartOptions}
            />
          </div>
        </div>
      </>
      {/*End:: Finance Performance Section */}

      {isLoading && <Spinner />}
    </>
  )
}

const ManageDashInfoWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <DashboardsInfo />
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ManageDashInfoWrapper}
