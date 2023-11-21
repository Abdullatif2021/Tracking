/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'
import { useSelector } from 'react-redux'
import { useAuth } from '../../../../../app/modules/auth'
import {
  ReportPermissions,
  RolesPermissions,
  SettingPermission,
  UserPermissions,
  VehiclePermissions,
  WorkingDayPermissions,
} from '../../../../helpers/permissions'

const DriverMenu = () => {
  const intl = useIntl()
  const { currentUser } = useAuth()
  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Driver</span>
        </div>
      </div>
      {currentUser?.roles.includes('profile_driver') &&
        <SidebarMenuItem
          to='/driver/account'
          icon='abstract-28'
          title={intl.formatMessage({ id: 'profile' })}
          fontIcon='bi-layers'
        />
      }

      {currentUser?.roles.includes('session_driver') &&
        <SidebarMenuItem
          to='/driver/session'
          icon='abstract-28'
          title={intl.formatMessage({ id: 'session' })}
          fontIcon='bi-layers'
        />
      }
      {currentUser?.roles.includes('report_driver') &&
        <SidebarMenuItem
          to='/driver/report'
          icon='abstract-28'
          title={intl.formatMessage({ id: 'report' })}
          fontIcon='bi-layers'
        />
      }
      {currentUser?.roles.includes('working_day_driver') &&
        <SidebarMenuItem
          to='driver/working/days'
          icon='abstract-28'
          title={intl.formatMessage({ id: 'working_day' })}
          fontIcon='bi-layers'
        />
      }


    </>
  )
}

export { DriverMenu }
