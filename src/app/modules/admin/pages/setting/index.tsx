import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'
import { useIntl } from 'react-intl'

import AddWorkingTime from './manage-work-time/add-edit/Add'
import EditWorkingTime from './manage-work-time/add-edit/Edit'

import AddInfractionType from './manage-infraction-type/add-edit/Add'
import EditInfractionType from './manage-infraction-type/add-edit/Edit'

import AddReasonCancel from './manage-reason-cancel/add-edit/Add'
import EditReasonCancel from './manage-reason-cancel/add-edit/Edit'

import AddTimezone from './manage-timezone/add-edit/Add'
import EditTimezone from './manage-timezone/add-edit/Edit'

import AddCountry from './manage-country/add-edit/Add'
import EditCountry from './manage-country/add-edit/Edit'

import AddCity from './manage-city/add-edit/Add'
import EditCity from './manage-city/add-edit/Edit'

import AddGroup from './manage-group/add-edit/Add'
import EditGroup from './manage-group/add-edit/Edit'

import AddMaintenanceStatus from './manage-maintenance-status/add-edit/Add'
import EditMaintenanceStatus from './manage-maintenance-status/add-edit/Edit'

import AddMaintenance from './manage-maintenance/add-edit/Add'
import EditMaintenance from './manage-maintenance/add-edit/Edit'

import AddWorkshop from './manage-workshop/add-edit/Add'
import EditWorkshop from './manage-workshop/add-edit/Edit'

import AddUserType from './manage-user-type/add-edit/Add'
import EditUserType from './manage-user-type/add-edit/Edit'



import AddPart from './manage-part/add-edit/Add'
import EditPart from './manage-part/add-edit/Edit'


import AddPartCar from './manage-part-car/add-edit/Add'
import EditPartCar from './manage-part-car/add-edit/Edit'

import AddRegion from './manage-region/add-edit/Add'
import EditRegion from './manage-region/add-edit/Edit'

import AddBuilding from './manage-building/add-edit/Add'
import EditBuilding from './manage-building/add-edit/Edit'

import AddDepartment from './manage-department/add-edit/Add'
import EditDepartment from './manage-department/add-edit/Edit'
import {
  CityBreadcrumbs,
  CountryBreadcrumbs,
  GroupBreadcrumbs,
  InfractionTypeBreadcrumbs,
  ListWorkTimePath,
  MaintenanceBreadcrumbs,
  MaintenanceStatusBreadcrumbs,
  PartBreadcrumbs,
  ReasonCancelBreadcrumbs,
  TimezoneBreadcrumbs,
  UserTypeBreadcrumbs,
  WorkTimeBreadcrumbs,
  WorkshopBreadcrumbs,
  buildingBreadcrumbs,
  departmentBreadcrumbs,
  regionBreadcrumbs,
} from './routes/RoutesNames'
import { ManageWorkinTimeListWrapper } from './manage-work-time/List'
import { ManageInfractionTypeListWrapper } from './manage-infraction-type/List'
import { ManageReasonCancelListWrapper } from './manage-reason-cancel/List'
import { ManageTimezoneListWrapper } from './manage-timezone//List'
import { ManageCountryListWrapper } from './manage-country//List'
import { ManageCityListWrapper } from './manage-city/List'
import { ManageGroupListWrapper } from './manage-group/List'
import { ManageMaintenanceStatusListWrapper } from './manage-maintenance-status/List'
import { ManageMaintenanceListWrapper } from './manage-maintenance/List'
import { ManageWorkshopListWrapper } from './manage-workshop/List'
import { ManageUserTypeListWrapper } from './manage-user-type/List';

import { ManagePartListWrapper } from './manage-part/List';


import { ManagePartCarListWrapper } from './manage-part-car/List';

import { ManageRegionListWrapper } from './manage-region/List';

import { ManageBuildingListWrapper } from './manage-building/List';
import { ManageDepartmentListWrapper } from './manage-department/List';
import ReasonRoutes, { reasonRoutes } from './routes/resonRoutes'
//import { ManageVehiclesListWrapper } from './manage-vehicles/List';

const SettingPage = () => {
  const intl = useIntl()
  return (
    <Routes>
      <Route element={<Outlet />}>
        //#region Manage Shift
        <Route
          path='work-time'
          element={
            <>
              <PageTitle breadcrumbs={WorkTimeBreadcrumbs}>
                {intl.formatMessage({ id: 'work_time' })}{' '}
              </PageTitle>
              <ManageWorkinTimeListWrapper />
            </>
          }
        />
        <Route
          path='add-work-time'
          element={
            <>
              <PageTitle breadcrumbs={WorkTimeBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'add_object' },
                  { name: intl.formatMessage({ id: 'work_time' }) }
                )}
              </PageTitle>
              <AddWorkingTime />
            </>
          }
        />
        <Route
          path='edit-work-time'
          element={
            <>
              <PageTitle breadcrumbs={WorkTimeBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'edit_object' },
                  { name: intl.formatMessage({ id: 'work_time' }) }
                )}
              </PageTitle>
              <EditWorkingTime />
            </>
          }
        />
        //#endregion

        //#region Manage Infraction Type 
        <Route
          path='infraction-type'
          element={
            <>
              <PageTitle breadcrumbs={InfractionTypeBreadcrumbs}>
                {intl.formatMessage({ id: 'infraction_type' })}{' '}
              </PageTitle>
              <ManageInfractionTypeListWrapper />
            </>
          }
        />
        <Route
          path='add-infraction-type'
          element={
            <>
              <PageTitle breadcrumbs={InfractionTypeBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'add_object' },
                  { name: intl.formatMessage({ id: 'infraction_type' }) }
                )}
              </PageTitle>
              <AddInfractionType />
            </>
          }
        />
        <Route
          path='edit-infraction-type'
          element={
            <>
              <PageTitle breadcrumbs={InfractionTypeBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'edit_object' },
                  { name: intl.formatMessage({ id: 'infraction_type' }) }
                )}
              </PageTitle>
              <EditInfractionType />
            </>
          }
        />
        //#endregion
        //#region Reason Cancel
        <Route
          path='reason-cancel'
          element={
            <>
              <PageTitle breadcrumbs={ReasonCancelBreadcrumbs}>
                {intl.formatMessage({ id: 'reason_cancel' })}{' '}
              </PageTitle>
              <ManageReasonCancelListWrapper />
            </>
          }
        />
        <Route
          path='add-reason-cancel'
          element={
            <>
              <PageTitle breadcrumbs={ReasonCancelBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'add_object' },
                  { name: intl.formatMessage({ id: 'reason_cancel' }) }
                )}
              </PageTitle>
              <AddReasonCancel />
            </>
          }
        />
        <Route
          path='edit-reason-cancel'
          element={
            <>
              <PageTitle breadcrumbs={ReasonCancelBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'edit_object' },
                  { name: intl.formatMessage({ id: 'reason_cancel' }) }
                )}
              </PageTitle>
              <EditReasonCancel />
            </>
          }
        />
      </Route>
      //#endregion



      //#region Country
      <Route
        path='country'
        element={
          <>
            <PageTitle breadcrumbs={CountryBreadcrumbs}>
              {intl.formatMessage({ id: 'country' })}{' '}
            </PageTitle>
            <ManageCountryListWrapper />
          </>
        }
      />
      <Route
        path='add-country'
        element={
          <>
            <PageTitle breadcrumbs={CountryBreadcrumbs}>
              {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'country' }) })}
            </PageTitle>
            <AddCountry />
          </>
        }
      />
      <Route
        path='edit-country'
        element={
          <>
            <PageTitle breadcrumbs={CountryBreadcrumbs}>
              {intl.formatMessage({ id: 'edit_object' }, { name: intl.formatMessage({ id: 'country' }) })}
            </PageTitle>
            <EditCountry />
          </>
        }
      />
      //#endregion //#region timezone
      <Route
        path='timezone'
        element={
          <>
            <PageTitle breadcrumbs={TimezoneBreadcrumbs}>
              {intl.formatMessage({ id: 'timezone' })}{' '}
            </PageTitle>
            <ManageTimezoneListWrapper />
          </>
        }
      />
      <Route
        path='add-timezone'
        element={
          <>
            <PageTitle breadcrumbs={TimezoneBreadcrumbs}>
              {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'timezone' }) })}
            </PageTitle>
            <AddTimezone />
          </>
        }
      />
      <Route
        path='edit-timezone'
        element={
          <>
            <PageTitle breadcrumbs={TimezoneBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'timezone' }) }
              )}
            </PageTitle>
            <EditTimezone />
          </>
        }
      />
      //#endregion //#region City
      <Route
        path='city'
        element={
          <>
            <PageTitle breadcrumbs={CityBreadcrumbs}>{intl.formatMessage({ id: 'city' })} </PageTitle>
            <ManageCityListWrapper />
          </>
        }
      />
      <Route
        path='add-city'
        element={
          <>
            <PageTitle breadcrumbs={CityBreadcrumbs}>
              {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'city' }) })}
            </PageTitle>
            <AddCity />
          </>
        }
      />
      <Route
        path='edit-city'
        element={
          <>
            <PageTitle breadcrumbs={CityBreadcrumbs}>
              {intl.formatMessage({ id: 'edit_object' }, { name: intl.formatMessage({ id: 'city' }) })}
            </PageTitle>
            <EditCity />
          </>
        }
      />
      //#endregion //#region Group
      <Route
        path='group'
        element={
          <>
            <PageTitle breadcrumbs={GroupBreadcrumbs}>
              {intl.formatMessage({ id: 'group' })}
            </PageTitle>
            <ManageGroupListWrapper />
          </>
        }
      />
      <Route
        path='add-group'
        element={
          <>
            <PageTitle breadcrumbs={GroupBreadcrumbs}>
              {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'group' }) })}
            </PageTitle>
            <AddGroup />
          </>
        }
      />
      <Route
        path='edit-group'
        element={
          <>
            <PageTitle breadcrumbs={GroupBreadcrumbs}>
              {intl.formatMessage({ id: 'edit_object' }, { name: intl.formatMessage({ id: 'group' }) })}
            </PageTitle>
            <EditGroup />
          </>
        }
      />
      //#endregion

      //#region MaintenanceStatusBreadcrumbs
      <Route
        path='maintenance-status'
        element={
          <>
            <PageTitle breadcrumbs={MaintenanceStatusBreadcrumbs}>
              {intl.formatMessage({ id: 'maintenance_status' })}
            </PageTitle>
            <ManageMaintenanceStatusListWrapper />
          </>
        }
      />
      <Route
        path='add-maintenance-status'
        element={
          <>
            <PageTitle breadcrumbs={MaintenanceStatusBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'maintenance_status' }) }
              )}
            </PageTitle>
            <AddMaintenanceStatus />
          </>
        }
      />
      <Route
        path='edit-maintenance-status'
        element={
          <>
            <PageTitle breadcrumbs={MaintenanceStatusBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'maintenance_status' }) }
              )}
            </PageTitle>
            <EditMaintenanceStatus />
          </>
        }
      />
      //#endregion //#region Maintenance
      <Route
        path='maintenance'
        element={
          <>
            <PageTitle breadcrumbs={MaintenanceBreadcrumbs}>
              {intl.formatMessage({ id: 'maintenance' })}
            </PageTitle>
            <ManageMaintenanceListWrapper />
          </>
        }
      />
      <Route
        path='add-maintenance'
        element={
          <>
            <PageTitle breadcrumbs={MaintenanceBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'maintenance' }) }
              )}
            </PageTitle>
            <AddMaintenance />
          </>
        }
      />
      <Route
        path='edit-maintenance'
        element={
          <>
            <PageTitle breadcrumbs={MaintenanceBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'maintenance' }) }
              )}
            </PageTitle>
            <EditMaintenance />
          </>
        }
      />
      //#endregion



      //#region WorkShop
      <Route
        path='workshop'
        element={
          <>
            <PageTitle breadcrumbs={WorkshopBreadcrumbs}>
              {intl.formatMessage({ id: 'workshop' })}
            </PageTitle>
            <ManageWorkshopListWrapper />
          </>
        }
      />
      <Route
        path='add-workshop'
        element={
          <>
            <PageTitle breadcrumbs={WorkshopBreadcrumbs}>
              {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'workshop' }) })}
            </PageTitle>
            <AddWorkshop />
          </>
        }
      />
      <Route
        path='edit-workshop'
        element={
          <>
            <PageTitle breadcrumbs={WorkshopBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'workshop' }) }
              )}
            </PageTitle>
            <EditWorkshop />
          </>
        }
      />
      //#endregion



      //#region user Type
      <Route
        path='user-type'
        element={
          <>
            <PageTitle breadcrumbs={UserTypeBreadcrumbs}>
              {intl.formatMessage({ id: 'user_type' })}
            </PageTitle>
            <ManageUserTypeListWrapper />
          </>
        }
      />
      <Route
        path='add-user-type'
        element={
          <>
            <PageTitle breadcrumbs={UserTypeBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'user_type' }) }
              )}
            </PageTitle>
            <AddUserType />
          </>
        }
      />
      <Route
        path='edit-user-type'
        element={
          <>
            <PageTitle breadcrumbs={UserTypeBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'user_type' }) }
              )}
            </PageTitle>
            <EditUserType />
          </>
        }
      />
      //#endregion


      //#region Part 
      <Route
        path='part'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage({ id: 'part' })}
            </PageTitle>
            <ManagePartListWrapper />
          </>
        }
      />
      <Route
        path='add-part'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'part' }) }
              )}
            </PageTitle>
            <AddPart />
          </>
        }
      />
      <Route
        path='edit-part'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'part' }) }
              )}
            </PageTitle>
            <EditPart />
          </>
        }
      />
      //#endregion


      //#region Part  Car 
      <Route
        path='part-car'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage({ id: 'part_car' })}
            </PageTitle>
            <ManagePartCarListWrapper />
          </>
        }
      />
      <Route
        path='add-part-car'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'part_car' }) }
              )}
            </PageTitle>
            <AddPartCar />
          </>
        }
      />
      <Route
        path='edit-part-car'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'part_car' }) }
              )}
            </PageTitle>
            <EditPartCar />
          </>
        }
      />
      //#endregion

      //#region Part  Type 
      <Route
        path='part-type'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage({ id: 'part_car' })}
            </PageTitle>
            <ManagePartCarListWrapper />
          </>
        }
      />
      <Route
        path='add-part-car'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'part_car' }) }
              )}
            </PageTitle>
            <AddPartCar />
          </>
        }
      />
      <Route
        path='edit-part-car'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'part_car' }) }
              )}
            </PageTitle>
            <EditPartCar />
          </>
        }
      />
      //#endregion


      //#region Part  Type 
      <Route
        path='part-type'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage({ id: 'part_type' })}
            </PageTitle>
            <ManagePartCarListWrapper />
          </>
        }
      />
      <Route
        path='add-part-type'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'part_type' }) }
              )}
            </PageTitle>
            <AddPartCar />
          </>
        }
      />
      <Route
        path='edit-part-type'
        element={
          <>
            <PageTitle breadcrumbs={PartBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'part_type' }) }
              )}
            </PageTitle>
            <EditPartCar />
          </>
        }
      />
      //#endregion

      //#region  Region

      <Route
        path='region'
        element={
          <>
            <PageTitle breadcrumbs={regionBreadcrumbs}>
              {intl.formatMessage({ id: 'region' })}
            </PageTitle>
            <ManageRegionListWrapper />
          </>
        }
      />
      <Route
        path='add-region'
        element={
          <>
            <PageTitle breadcrumbs={regionBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'region' }) }
              )}
            </PageTitle>
            <AddRegion />
          </>
        }
      />
      <Route
        path='edit-region'
        element={
          <>
            <PageTitle breadcrumbs={regionBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'region' }) }
              )}
            </PageTitle>
            <EditRegion />
          </>
        }
      />
      //#endregion



      //#region  Building

      <Route
        path='building'
        element={
          <>
            <PageTitle breadcrumbs={buildingBreadcrumbs}>
              {intl.formatMessage({ id: 'building' })}
            </PageTitle>
            <ManageBuildingListWrapper />
          </>
        }
      />
      <Route
        path='add-building'
        element={
          <>
            <PageTitle breadcrumbs={buildingBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'building' }) }
              )}
            </PageTitle>
            <AddBuilding />
          </>
        }
      />
      <Route
        path='edit-building'
        element={
          <>
            <PageTitle breadcrumbs={buildingBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'building' }) }
              )}
            </PageTitle>
            <EditBuilding />
          </>
        }
      />
      //#endregion



      //#region  department

      <Route
        path='department'
        element={
          <>
            <PageTitle breadcrumbs={departmentBreadcrumbs}>
              {intl.formatMessage({ id: 'department' })}
            </PageTitle>
            <ManageDepartmentListWrapper />
          </>
        }
      />
      <Route
        path='add-department'
        element={
          <>
            <PageTitle breadcrumbs={departmentBreadcrumbs}>
              {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'department' }) }
              )}
            </PageTitle>
            <AddDepartment />
          </>
        }
      />
      <Route
        path='edit-department'
        element={
          <>
            <PageTitle breadcrumbs={departmentBreadcrumbs}>
              {intl.formatMessage(
                { id: 'edit_object' },
                { name: intl.formatMessage({ id: 'department' }) }
              )}
            </PageTitle>
            <EditDepartment />
          </>
        }
      />
      //#endregion
      {reasonRoutes.map((route, index) => {
        //if (route.permission == 'admin') {
        return (
          <Route key={index} {...route} />
        )
        // }
      })}

      <Route index element={<Navigate to={ListWorkTimePath} />} />
    </Routes>
  )
}
export default SettingPage
