/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router'
import {GenderType, KTIcon, QUERIES, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useQuery} from 'react-query'
import {PilotInfo} from './core/Model'
import {getPilotInfo} from './core/request'
import {useIntl} from 'react-intl'
import { useNavigate } from 'react-router-dom'
import {  UpdateProfilePath } from './routes/RouteNames'


const AccountHeader: React.FC = () => {
  const intl = useIntl()
  const navigate = useNavigate();
  const location = useLocation()
  const [data, setData] = useState<PilotInfo>(null)
  const {data: dataInfo, isLoading} = useQuery(
    `${QUERIES.PILOT_INFO_DETAILS}`,
    () => {
      return getPilotInfo()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )



  useEffect(() => {
    if (dataInfo) {
      setData({
        id: dataInfo?.id,
        name: dataInfo?.name,
        email: dataInfo?.email,
        mobile: dataInfo?.mobile,
        gender:GenderType[dataInfo?.gender]

      })
    }
    //, 'purchase_info',
  }, [dataInfo])

  return (
    <>
      {data && (
        <div className='card mb-5 mb-xl-3'>
          <div className='card-body pt-9 pb-0'>
            <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
              <div className='me-7 mb-4'>
                <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                  <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Driver' />
                  <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                </div>
              </div>

              <div className='d-flex flex-wrap' style={{flex: 2}}>
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
                      {data.mobile}
                    </a>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                    >
                      <KTIcon iconName='sms' className='fs-4 me-1' />
                      {data.email}
                    </a>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary mb-2 mx-3'
                    >
                      <i className='bi bi-person fs-4 me-1' />
                      {data.gender}
                    </a>
                  </div>
                </div>
                <div style={{flex: 1}}></div>
              </div>
            </div>
          </div>

          <div className='d-flex overflow-auto h-55px mx-5'>
            {
              <button type='button' className='btn btn-primary my-2 m-auto' onClick={() => {
                navigate(UpdateProfilePath , {state:dataInfo})
              }}>
                <KTIcon iconName='edit' className='fs-2' />
                {intl.formatMessage(
                  {id: 'edit_object'},
                  {
                    name: intl.formatMessage({id: 'profile'}),
                  }
                )}
              </button>
            }
          </div>
        </div>
      )}
    </>
  )
}

export {AccountHeader}
