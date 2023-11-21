/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
// import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
// import {
//   ListsWidget2,
//   ListsWidget3,
//   ListsWidget4,
//   ListsWidget6,
//   TablesWidget5,
//   TablesWidget10,
//   MixedWidget8,
//   CardsWidget7,
//   CardsWidget17,
//   CardsWidget20,
//   ListsWidget26,
//   EngageWidget10,
// } from '../../../_metronic/partials/widgets'
import {ManageDashInfoWrapper} from '../../modules/admin/pages/dashboard/info/dashboardsInfo'
import {ManageDashFuelCardWrapper} from '../../modules/admin/pages/dashboard/Fuel/dashboardsFuel'
import {ManageDashCarOutOfServiceWrapper} from '../../modules/admin/pages/dashboard/cars_out_of_service/dash_cars_out_of_service'

const DashboardPage: FC = () => (
  <>
   
    {/*start:: dashboard Info  */}

    <ManageDashInfoWrapper />

    <ManageDashFuelCardWrapper />

    <ManageDashCarOutOfServiceWrapper />
    {/*end:: dashboard Info  */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
