import AddReasonCarOutService from '../manage-reason-car-out-service/add-edit/Add'
import EditReasonCarOutService from '../manage-reason-car-out-service/add-edit/Edit'
import { ListReasonCarOutServicePath } from './RoutesNames';
import { RouteProps } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../../../_metronic/layout/core';
import { ManageReasonCarOutServiceListWrapper } from '../manage-reason-car-out-service/List';
import { intlNonCom } from '../../../../../../_metronic/i18n/i18nProvider';


const breadcrumbs: Array<PageLink> = [
    {
        title: intlNonCom.formatMessage({ id: 'reason_car_out_service' }),
        path: ListReasonCarOutServicePath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]
export const reasonRoutes: (RouteProps & { permission?: string | null })[] = [


    {
        path: 'reason-car-out-service',
        element:
            <>
                <PageTitle breadcrumbs={breadcrumbs}>
                    {intlNonCom.formatMessage(
                        { id: 'edit_object' },
                        { name: intlNonCom.formatMessage({ id: 'reason_car_out_service' }) }
                    )}
                </PageTitle>
                <ManageReasonCarOutServiceListWrapper />
            </>
    },

    {
        path: 'add-reason-car-out-service',
        element:
            <>
                <PageTitle breadcrumbs={breadcrumbs}>
                    {intlNonCom.formatMessage(
                        { id: 'edit_object' },
                        { name: intlNonCom.formatMessage({ id: 'reason_car_out_service' }) }
                    )}
                </PageTitle>
                <AddReasonCarOutService />
            </>
    },

    {
        path: 'edit-reason-car-out-service',
        element:
            <>
                <PageTitle breadcrumbs={breadcrumbs}>
                    {intlNonCom.formatMessage(
                        { id: 'edit_object' },
                        { name: intlNonCom.formatMessage({ id: 'reason_car_out_service' }) }
                    )}
                </PageTitle>
                <EditReasonCarOutService />
            </>
    }

];


export default reasonRoutes;

    //#region Reason Cancel

