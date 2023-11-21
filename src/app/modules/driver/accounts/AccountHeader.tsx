/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {useLocation} from 'react-router'
import {KTIcon, QUERIES, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {CurrentTripsPath, OldTripsPath} from './routes/RouteNames'
import {useQuery} from 'react-query'
import {DriverInfo} from './core/Model'
import {getDriverInfo} from './core/request'
import {useIntl} from 'react-intl'
import InputDetail from './components/InputDetail'

const AccountHeader: React.FC = () => {
  const intl = useIntl()
  const location = useLocation()
  const [data, setData] = useState<DriverInfo>(null)
  const {data: dataInfo, isLoading} = useQuery(
    `${QUERIES.DRIVER_INFO_DETAILS}`,
    () => {
      return getDriverInfo()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )
  useEffect(() => {
    if (dataInfo) {
      let initData = dataInfo
      setData({
        id: initData?.id,
        name: initData?.name,
        email: initData?.email,
        phone: initData?.meta_data.phone,
        emp_id: initData?.meta_data.emp_id,
        license_number: initData?.meta_data.license_number,
        issue_date: initData?.meta_data.issue_date,
        exp_date: initData?.meta_data.exp_date,
        contract_number: initData?.meta_data.contract_number,
      })
    }
    //, 'purchase_info',
  }, [dataInfo])

  return (
    <>
      {data && (
        <div className='card mb-5 mb-xl-10'>
          <div className='card-body pt-9 pb-0'>
            <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
              <div className='me-7 mb-4'>
                <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                  <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Driver' />
                  <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                </div>
              </div>

              <div className='d-flex flex-wrap' style={{flex:2}}>
                <div className='d-flex flex-column flex-4'>
                  <div className='d-flex align-items-center mb-2'>
                    <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                      {data.name}
                    </a>
                    <a href='#'>
                      <KTIcon iconName='verify' className='fs-1 text-primary' />
                    </a>
                  </div>

                  <div className='d-flex flex-wrap fw-bold fs-6 mb-2 pe-2'>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    >
                      <KTIcon iconName='phone' className='fs-4 me-1' />
                      {data.phone}
                    </a>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                    >
                      <KTIcon iconName='sms' className='fs-4 me-1' />
                      {data.email}
                    </a>
                  </div>
                  <div className='row'>
                    <InputDetail title={intl.formatMessage({id: 'emp_id'})} text={data.emp_id} />
                    <InputDetail
                      title={intl.formatMessage({id: 'license_number'})}
                      text={data.license_number}
                    />
                    <InputDetail
                      title={intl.formatMessage({id: 'contract_number'})}
                      text={data.contract_number}
                    />
                    <InputDetail
                      title={intl.formatMessage({id: 'issue_date'})}
                      text={data.issue_date}
                    />
                    <InputDetail
                      title={intl.formatMessage({id: 'exp_date'})}
                      text={data.exp_date}
                    />
                  </div>
                </div>
                <div style={{flex:1}} >

                </div>
              </div>
            </div>
          </div>

          <div className='d-flex overflow-auto h-55px mx-5'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/driver/account/current-trip' && 'active')
                  }
                  to={CurrentTripsPath}
                >
                  Current Trip
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/driver/account/old-trip' && 'active')
                  }
                  to={OldTripsPath}
                >
                  Old Trip
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export {AccountHeader}
