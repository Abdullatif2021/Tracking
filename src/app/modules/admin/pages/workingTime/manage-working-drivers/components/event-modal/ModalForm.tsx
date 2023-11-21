import { FC, useState } from 'react'

import clsx from 'clsx'
import { useListView } from '../../core/ListViewProvider'

import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { EditWorkingDriverspath } from '../../../routes/RoutesNames'
import { KTIcon } from '../../../../../../../../_metronic/helpers'
import { WorkingDayTypeEnum } from '../../../core/model'
import { useAuth } from '../../../../../../auth'
import InputDetail from '../../../../../../../../_metronic/helpers/components/fields/InputDetail'


type Props = {
    isLoading: boolean
    data: any
}


const ModalForm: FC<Props> = ({ data, isLoading }) => {
    const { currentUser } = useAuth();
    const intl = useIntl();
    const {itemIdForUpdate, setItemIdForUpdate} = useListView()
    const navigate = useNavigate();
    const handleEdit = () => {
        
        navigate(EditWorkingDriverspath , {state: itemIdForUpdate})
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
            { currentUser?.roles.includes('edit_driver_working_day') &&        <button type='button' className='btn btn-primary' onClick={handleEdit}>
                    <KTIcon iconName='edit' className='fs-2' />
                    {intl.formatMessage({ id: 'edit_object' }, {
                        name: intl.formatMessage({ id: 'working_day' })
                    })}
                </button>}

            </div>
        </div>

    )
}

export { ModalForm }
