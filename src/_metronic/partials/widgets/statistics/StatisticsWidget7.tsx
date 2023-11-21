import React from 'react'

interface Props {
  title: string
  count: number
  svgIcon?: React.ReactNode
  badge?: number
  key?: string | number
}

const defaultSvgIcon = () => {
  return (
    <>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.3'
          d='M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z'
          fill='currentColor'
        />
        <path
          d='M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z'
          fill='currentColor'
        />
      </svg>
    </>
  )
}

const StatisticsWidget7: React.FC<Props> = ({title, count, svgIcon, badge, key}) => {
  return (
    <>
      {/* begin::Col */}
      <div className='col mb-xl-10 py-2' key={key}>
        {/* begin::Card widget 7 */}
        <div className='card h-lg-100 ' style={{maxWidth: 200}}>
          {/* begin::Body */}
          <div className='card-body d-flex justify-content-between align-items-start flex-column'>
            {/* begin::Icon */}
            <div className='m-0'>
              {/* begin::Svg Icon*/}
              <span className='svg-icon svg-icon-2hx svg-icon-gray-600'>
                {svgIcon ? svgIcon : defaultSvgIcon()}
              </span>
              {/* end::Svg Icon */}
            </div>
            {/* end::Icon */}
            {/* begin::Section */}
            <div className='d-flex flex-column my-7'>
              {/* begin::Number */}
              <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'> {count}</span>
              {/* end::Number */}
              {/* begin::Title */}
              <div className='m-0' style={{minHeight: 44}}>
                <span className='fw-semibold fs-6 text-gray-400'>{title}</span>
              </div>
              {/* end::Title */}
            </div>
            {/* end::Section */}
            {/* begin::Badge */}
            {badge && (
              <span className='badge badge-light-success fs-base'>
                <span className='svg-icon svg-icon-5 svg-icon-success ms-n1'>{badge}</span>
              </span>
            )}
            {/* end::Badge */}
          </div>
          {/* end::Body */}
        </div>
        {/* end::Card widget 2 */}
      </div>
      {/* end::Col */}
    </>
  )
}

export default StatisticsWidget7
