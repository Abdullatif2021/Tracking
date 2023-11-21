import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'

type ChartData = number[][][]

type ChartProps = {
  toggleSelector: string
  chartSelector: string
  data?: ChartData
  options: ApexOptions | any
}

const ChartWidget9: React.FC<ChartProps> = ({toggleSelector, chartSelector, data, options}) => {
  const chartRef = useRef<ApexCharts | null>(null)

  useEffect(() => {
    const element = document.querySelector(chartSelector)

    if (!element) {
      return
    }

    chartRef.current = new ApexCharts(element, options)
    const tab = document.querySelector(toggleSelector)

    tab?.addEventListener('shown.bs.tab', function (event) {
      if (chartRef.current) {
        chartRef.current.render()
      }
    })

    chartRef.current.render()

    return () => chartRef.current?.destroy()
  }, [chartSelector, data, options, toggleSelector])

  return <div id={chartSelector.replace('#', '')}></div>
}

export default ChartWidget9
