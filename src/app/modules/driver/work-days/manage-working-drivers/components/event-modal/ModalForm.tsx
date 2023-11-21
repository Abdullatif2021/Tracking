import { FC, useState } from 'react'
import { useListView } from '../../core/ListViewProvider'
import { useIntl } from 'react-intl'
import { Link, useNavigate } from 'react-router-dom'
import { WorkingDayTypeEnum } from '../../../core/model'
import InputDetail from '../../../../../../../_metronic/helpers/components/fields/InputDetail'




type Props = {
    isLoading: boolean
    data: any
}


const ModalForm: FC<Props> = ({ data, isLoading }) => {
    const intl = useIntl();
    const { itemIdForUpdate, setItemIdForUpdate } = useListView()
    const navigate = useNavigate();
    const handleEdit = () => {


    }

    return (

        <div
        >
            <div className='row'>
                <div className='col-12'>
                    <InputDetail
                        title={intl.formatMessage({ id: 'driver' })}
                        text={data['driver']}

                    />
                </div>

                <div className='col-12'>
                    <InputDetail
                        title={intl.formatMessage({ id: 'region' })}
                        text={data['region']}

                    />
                </div>
                <div className='col-12'>
                    <InputDetail
                        title={intl.formatMessage({ id: 'group' })}
                        text={data['group']}

                    />
                </div>

                <div className='col-12'>
                    <InputDetail
                        title={intl.formatMessage({ id: 'time_in' })}
                        text={data['time_in']}

                    />
                </div>
                <div className='col-12'>
                    <InputDetail
                        title={intl.formatMessage({ id: 'time_out' })}
                        text={data['time_out']}

                    />
                </div>
                <div className='col-12'>
                    <InputDetail
                        title={intl.formatMessage({ id: 'type' })}
                        text={WorkingDayTypeEnum[data['type']]}

                    />
                </div>
            </div>

            <div className='row'>
                {/* <Link
                    className={
                        `nav-link text-active-primary me-2 ` +
                        (location.pathname === '/driver/account/current-trip' && 'active')
                    }
                    to={TripWithStatusPath + }
                >
                    <KTIcon iconName='eye' className='fs-1' />
                </Link> */}

                {/* {<button type='button' className='btn btn-primary' onClick={()=>{
                    navigate(TripWithStatusPath+0)
                }}>
                    <KTIcon iconName='edit' className='fs-2' />
                    {intl.formatMessage({ id: 'edit_object' }, {
                        name: intl.formatMessage({ id: 'working_day' })
                    })}
                </button>}  */}

            </div>
        </div>

    )
}

export { ModalForm }
