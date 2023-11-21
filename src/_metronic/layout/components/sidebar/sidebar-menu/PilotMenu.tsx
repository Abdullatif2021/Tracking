/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import {useSelector} from 'react-redux'
import {useAuth} from '../../../../../app/modules/auth'
import {
  ReportPermissions,
  RolesPermissions,
  SettingPermission,
  UserPermissions,
  VehiclePermissions,
  WorkingDayPermissions,
} from '../../../../helpers/permissions'

const PilotMenu = () => {
  const intl = useIntl()
  const userTypes = useSelector((state: any) => state.pageTimeManager?.userTypes)
  const {currentUser} = useAuth()
  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>PIlot</span>
        </div>
      </div>
      {
        <SidebarMenuItem
          to='/pilot/account'
          icon='abstract-28'
          title={intl.formatMessage({id: 'trips'})}
          fontIcon='bi-layers'
        />
      }




    </>
  )
}

export {PilotMenu}
