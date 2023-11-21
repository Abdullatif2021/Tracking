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

const AdminMenu = () => {
  const intl = useIntl()
  const userTypes = useSelector((state: any) => state.pageTimeManager?.userTypes)
  const { currentUser } = useAuth()

  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Admin</span>
        </div>
      </div>
      {UserPermissions.some((r) => currentUser?.roles.includes(r)) && (
        <SidebarMenuItemWithSub
          to='/admin/users'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'user' }) }
          )}
          fontIcon='bi-layers'
        >
          {currentUser?.roles.includes('manage_driver') && (
            <SidebarMenuItem
              to='/admin/users/manage-driver'
              title={intl.formatMessage({ id: 'driver' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('manage_user') && (
            <SidebarMenuItem
              to='/admin/users/manage-user'
              title={intl.formatMessage({ id: 'user' })}
              hasBullet={true}
            />
          )}
          {userTypes.map((item) => {
            return (
              <SidebarMenuItem
                to={'/admin/users/manage-user-type/' + item.id}
                title={item.name}
                hasBullet={true}
              />
            )
          })}
        </SidebarMenuItemWithSub>
      )}
      {RolesPermissions.some((r) => currentUser?.roles.includes(r)) && (
        <SidebarMenuItemWithSub
          to='/admin/roles'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'role' }) }
          )}
          fontIcon='bi-layers'
        >
          {currentUser?.roles.includes('manage_role') && (
            <SidebarMenuItem
              to='/admin/roles/manage-role'
              title={intl.formatMessage({ id: 'role' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('manage_permission') && (
            <SidebarMenuItem
              to='/admin/roles/manage-permission'
              title={intl.formatMessage({ id: 'permission' })}
              hasBullet={true}
            />
          )}
        </SidebarMenuItemWithSub>
      )}
      {VehiclePermissions.some((r) => currentUser?.roles.includes(r)) && (
        <SidebarMenuItemWithSub
          to='/admin/vehicles'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'vehicle' }) }
          )}
          fontIcon='bi-layers'
        >
          {currentUser?.roles.includes('manage_vehicle') && (
            <SidebarMenuItem
              to='/admin/vehicles/manage-vehicles'
              title={intl.formatMessage({ id: 'vehicles' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('vehicle_type') && (
            <SidebarMenuItem
              to='/admin/vehicles/vehicle-types'
              title={intl.formatMessage({ id: 'vehicle_types' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('vehicle_maker') && (
            <SidebarMenuItem
              to='/admin/vehicles/vehicle-makers'
              title={intl.formatMessage({ id: 'vehicle_makers' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('vehicle_model') && (
            <SidebarMenuItem
              to='/admin/vehicles/vehicle-models'
              title={intl.formatMessage({ id: 'vehicle_models' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('vehicle_color') && (
            <SidebarMenuItem
              to='/admin/vehicles/vehicle-colors'
              title={intl.formatMessage({ id: 'vehicle_colors' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('vehicle_group') && (
            <SidebarMenuItem
              to='/admin/vehicles/vehicle-groups'
              title={intl.formatMessage({ id: 'vehicle_groups' })}
              hasBullet={true}
            />
          )}
        </SidebarMenuItemWithSub>
      )}

      {currentUser?.roles.includes('manage_station') && (
        <SidebarMenuItem
          to='/admin/stations/manage-stations'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'station' }) }
          )}
          fontIcon='bi-layers'
        />
      )}
      {currentUser?.roles.includes('manage_terminal') && (
        <SidebarMenuItem
          to='/admin/terminals/manage-terminals'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'terminal' }) }
          )}
          fontIcon='bi-layers'
        />
      )}

      {currentUser?.roles.includes('manage_trips') && (
        <SidebarMenuItem
          to='/admin/trips/manage-trips'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'trip' }) }
          )}
          fontIcon='bi-layers'
        />
      )}

      {WorkingDayPermissions.some((r) => currentUser?.roles.includes(r)) && (
        <SidebarMenuItemWithSub
          to='/admin/working-days'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'working_days' }) }
          )}
          fontIcon='bi-layers'
        >
          {currentUser?.roles.includes('car_working_days') && (
            <SidebarMenuItem
              to='/admin/working-days/manage-cars'
              title={intl.formatMessage({ id: 'cars_working_days' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('driver_working_days') && (
            <SidebarMenuItem
              to='/admin/working-days/manage-drivers'
              title={intl.formatMessage({ id: 'drivers_working_days' })}
              hasBullet={true}
            />
          )}
        </SidebarMenuItemWithSub>
      )}
      {SettingPermission.some((r) => currentUser?.roles.includes(r)) && (
        <SidebarMenuItemWithSub
          to='/admin/setting'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'setting' }) }
          )}
          fontIcon='bi-layers'
        >
          
          
            <SidebarMenuItem
              to='/admin/setting/user-type'
              title={intl.formatMessage({ id: 'user_type' })}
              hasBullet={true}
            />
          
          {currentUser?.roles.includes('manage_working_time') && (
            <SidebarMenuItem
              to='/admin/setting/work-time'
              title={intl.formatMessage({ id: 'work_time' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('manage_infraction_type') && (
            <SidebarMenuItem
              to='/admin/setting/infraction-type'
              title={intl.formatMessage({ id: 'infraction_type' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_reason_cancel') && (
            <SidebarMenuItem
              to='/admin/setting/reason-cancel'
              title={intl.formatMessage({ id: 'reason_cancel' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_timezone') && (
            <SidebarMenuItem
              to='/admin/setting/timezone'
              title={intl.formatMessage({ id: 'timezone' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_country') && (
            <SidebarMenuItem
              to='/admin/setting/country'
              title={intl.formatMessage({ id: 'country' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_city') && (
            <SidebarMenuItem
              to='/admin/setting/city'
              title={intl.formatMessage({ id: 'city' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_group') && (
            <SidebarMenuItem
              to='/admin/setting/group'
              title={intl.formatMessage({ id: 'group' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_region') && (
            <SidebarMenuItem
              to='/admin/setting/region'
              title={intl.formatMessage({ id: 'region' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_building') && (
            <SidebarMenuItem
              to='/admin/setting/building'
              title={intl.formatMessage({ id: 'building' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_department') && (
            <SidebarMenuItem
              to='/admin/setting/department'
              title={intl.formatMessage({ id: 'department' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('manage_reason_car_out_service') && (
            <SidebarMenuItem
              to='/admin/setting/reason-car-out-service'
              title={intl.formatMessage({ id: 'reason_car_out_service' })}
              hasBullet={true}
            />
          )}
        </SidebarMenuItemWithSub>
      )}

      {ReportPermissions.some((r) => currentUser?.roles.includes(r)) && (
        <SidebarMenuItemWithSub
          to='/admin/reports'
          icon='abstract-28'
          // title='Manage Report'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'report' }) }
          )}
          fontIcon='bi-layers'
        >
          {currentUser?.roles.includes('reply_map') && (
            <SidebarMenuItem
              to='/admin/reports/reply-map'
              title={intl.formatMessage({ id: 'reply_map' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('trip_report') && (
            <SidebarMenuItem
              to='/admin/reports/trip-report'
              title={intl.formatMessage({ id: 'trip_report' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('event_trip') && (
            <SidebarMenuItem
              to='/admin/reports/event-report'
              title={intl.formatMessage({ id: 'event_report' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('stop_report') && (
            <SidebarMenuItem
              to='/admin/reports/stop-report'
              title={intl.formatMessage({ id: 'stop_report' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('reason_report') && (
            <SidebarMenuItem
              to='/admin/reports/reason-report'
              title={intl.formatMessage({ id: 'reason_report' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('trip_driver_report') && (
            <SidebarMenuItem
              to='/admin/reports/trip-driver-report'
              title={intl.formatMessage({ id: 'trip_driver_report' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('trip_customer_report') && (
            <SidebarMenuItem
              to='/admin/reports/trip-customer-report'
              title={intl.formatMessage({ id: 'trip_customer_report' })}
              hasBullet={true}
            />
          )}

          {currentUser?.roles.includes('summery_report') && (
            <SidebarMenuItem
              to='/admin/reports/summery-report'
              title={intl.formatMessage({ id: 'summery_report' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('shift_driver_report') && (
            <SidebarMenuItem
              to='/admin/reports/shift-driver-report'
              title={intl.formatMessage({ id: 'shift_driver_report' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('log_path_report') && (
            <SidebarMenuItem
              to='/admin/reports/log-path-report'
              title={intl.formatMessage({ id: 'log_path_report' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('log_terminal_report') && (
            <SidebarMenuItem
              to='/admin/reports/log-terminal-report'
              title={intl.formatMessage({ id: 'log_terminal_report' })}
              hasBullet={true}
            />
          )}
          {currentUser?.roles.includes('car_out_service_report') && (
            <SidebarMenuItem
              to='/admin/reports/car-out-service-report'
              title={intl.formatMessage({ id: 'car_out_service_report' })}
              hasBullet={true}
            />
          )}
        </SidebarMenuItemWithSub>
      )}

      {currentUser?.roles.includes('manage_path') && (
        <SidebarMenuItem
          to='/admin/path/manage-path'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'path' }) }
          )}
          fontIcon='bi-layers'
        />
      )}

      {currentUser?.roles.includes('manage_ads') && (
        <SidebarMenuItem
          to='/admin/ads/manage-ads'
          icon='abstract-28'
          title={intl.formatMessage({ id: 'manage_object' }, { name: intl.formatMessage({ id: 'ads' }) })}
          fontIcon='bi-layers'
        />
      )}

      {currentUser?.roles.includes('public_map') && (
        <SidebarMenuItem
          to='/admin/public-map/all'
          icon='abstract-28'
          title={intl.formatMessage({ id: 'public_map' })}
          fontIcon='bi-layers'
        />
      )}

      {/* <SidebarMenuItem
        to='/admin/live-vedio'
        icon='abstract-28'
        title={intl.formatMessage({ id: 'live_stream' })}
        fontIcon='bi-layers'
      /> */}

      {currentUser?.roles.includes('manage_vehicle_camera') && (
        <SidebarMenuItem
          to='/admin/camera/manage-camera'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'camera' }) }
          )}
          fontIcon='bi-layers'
        />
      )}
      {currentUser?.roles.includes('manage_car_out_service') && (
        <SidebarMenuItem
          to='/admin/car-out-service/manage-car-out-service'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'car_out_service' }) }
          )}
          fontIcon='bi-layers'
        />
      )}

      {currentUser?.roles.includes('manage_fuel_history') && (
        <SidebarMenuItem
          to='/admin/fuel-history/manage-fuel-history'
          icon='abstract-28'
          title={intl.formatMessage(
            { id: 'manage_object' },
            { name: intl.formatMessage({ id: 'fuel_history' }) }
          )}
          fontIcon='bi-layers'
        />
      )}
    </>
  )
}

export { AdminMenu }
