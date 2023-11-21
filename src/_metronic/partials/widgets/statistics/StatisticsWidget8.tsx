import React, {useRef, useState} from 'react'

interface item {
  icon?: React.ReactNode
  title?: string
  fields: {name: string; value: string | number}[]
}

interface CardProps {
  widgetSelector: string
  title?: string
  subTitle?: string
  items: item[]
  key?: string | number
}

const StatisticsWidget8: React.FC<CardProps> = ({title, subTitle, items, widgetSelector, key}) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlide = (event: any) => {
    const slide = event.relatedTarget
    const index = Array.from(slide.parentNode.children).indexOf(slide)
    console.log('index :>> ', index);
    setActiveIndex(index)
  }

  return (
    <div className='col p-2' key={key}>
      {/*begin::Slider Widget 1*/}
      <div
        ref={carouselRef}
        id={widgetSelector.replace('#', '')}
        className='card card-flush carousel carousel-custom carousel-stretch slide h-xl-100'
        data-bs-ride='carousel'
        data-bs-interval='5000'
        onSlide-bs-carousel={handleSlide}
      >
        {/*begin::Header*/}
        <div className='card-header pt-5'>
          {/*begin::Title*/}
          <h4 className='card-title d-flex align-items-start flex-column'>
            <span className='card-label fw-bold text-gray-800'>{title}</span>
            <span className='text-gray-400 mt-1 fw-bold fs-7'>{subTitle}</span>
          </h4>
          {/*end::Title*/}
          {/*begin::Toolbar*/}
          <div className='card-toolbar'>
            {/*begin::Carousel Indicators*/}
            <ol className='p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-primary'>
              {items.map((i, index) => {
                return (
                  <li
                    data-bs-target={widgetSelector}
                    data-bs-slide-to={index}
                    className={` ms-1  ${index === activeIndex ? 'active' : ''}`}
                  ></li>
                )
              })}
            </ol>
            {/*end::Carousel Indicators*/}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header*/}
        {/* start:Body */}
        <div className='card-body py-6'>
          <div className='carousel-inner mt-n5'>
            {items &&
              items.map((item, index) => {
                return (
                  <div className={`carousel-item ${index === activeIndex ? 'active show' : ''}`}>
                    <div className='d-flex align-items-center mb-5'>
                      <div className='w-80px flex-shrink-0 me-2'>
                        {/* <div
                          className='min-h-auto ms-n3'
                          id='kt_slider_widget_1_chart_1'
                          style={{height: '100px'}}
                        ></div> */}
                        {/* <i className="bi bi-fuel-pump fs-1 w-100 text-center"></i> */}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='45'
                          height='45'
                          fill='currentColor'
                          className='bi bi-fuel-pump text-primary text-center w-100'
                          viewBox='0 0 16 16'
                        >
                          <path d='M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z' />
                          <path d='M1 2a2 2 0 0 1 2-2h6a2-2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8V2Z' />
                        </svg>
                      </div>
                      <div className='m-0'>
                        <h4 className='fw-bold text-gray-800 mb-3'>{item.title}</h4>
                        <div className='row row-cols-2 '>
                          {item.fields &&
                            item.fields.map((field) => {
                              return (
                                <span className='col align-items-center fs-7 fw-bold text-gray-400 mb-2'>
                                  <span className='svg-icon svg-icon-6 svg-icon-gray-600 '></span>
                                  {field.name}: {field.value}
                                </span>
                              )
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        {/* end:Body */}
      </div>
      {/*end::Slider Widget 1*/}
    </div>
  )
}

export default StatisticsWidget8
