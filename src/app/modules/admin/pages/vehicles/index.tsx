import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'
import { useIntl } from 'react-intl';

import AddVehicle from './manage-vehicles/add-edit/Add';
import EditVehicle from './manage-vehicles/add-edit/Edit';

import AddType from './manage-vehicle-type/add-edit/Add';
import EditType from './manage-vehicle-type/add-edit/Edit';

import AddMaker from './manage-vehicle-maker/add-edit/Add';
import EditMaker from './manage-vehicle-maker/add-edit/Edit';

import AddModel from './manage-vehicle-model/add-edit/Add';
import EditModel from './manage-vehicle-model/add-edit/Edit';


import AddColor from './manage-vehicle-color/add-edit/Add';
import EditColor from './manage-vehicle-color/add-edit/Edit';


import AddGroup from './manage-vehicle-group/add-edit/Add';
import EditGroup from './manage-vehicle-group/add-edit/Edit';


import { ManageTypesListWrapper } from './manage-vehicle-type/List';
import { ManageMakersListWrapper } from './manage-vehicle-maker/List';
import { ManageModelsListWrapper } from './manage-vehicle-model/List';
import { ManageColorsListWrapper } from './manage-vehicle-color/List';
import { ManageGroupsListWrapper } from './manage-vehicle-group/List';
import { ListColorsPath, ListGroupsPath, ListMakerPath, ListModelsPath, ListVehiclesPath, colorsBreadcrumbs, groupsBreadcrumbs, makersBreadcrumbs, modelssBreadcrumbs, typesBreadcrumbs, vehiclesBreadcrumbs } from './routes/RoutesNames';
import { ManageVehiclesListWrapper } from './manage-vehicles/List';
import AccountVehicle from './manage-vehicles/add-edit/Account';
import View from './manage-vehicles/view/View';
//import { ManageVehiclesListWrapper } from './manage-vehicles/List';









const VechilesPage = () => {
  const intl = useIntl();
  return (
    <Routes>
      <Route element={<Outlet />}>
        //#region Manage Vehicles
        <Route
          path='manage-vehicles'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "manage_vehicles" })} </PageTitle>
              <ManageVehiclesListWrapper />
            </>
          }
        />
        <Route
          path='add-vehicle'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "add_object" }, { name: intl.formatMessage({ id: "vehicle" }) })}</PageTitle>
              <AddVehicle />
            </>
          }
        />
        <Route
          path='edit-vehicle'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "edit_object" }, { name: intl.formatMessage({ id: "vehicle" }) })}</PageTitle>
              <EditVehicle />
            </>
          }
        />

        <Route
          path='view-vehicle'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "edit_object" }, { name: intl.formatMessage({ id: "vehicle" }) })}</PageTitle>
              <View />
            </>
          }
        />

        <Route
          path='account-vehicle'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "account" })}</PageTitle>
              <AccountVehicle />
            </>
          }
        />
        


        //#endregion

        //#region vehicle type
        <Route
          path='vehicle-types'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "vehicle_types" })} </PageTitle>
              <ManageTypesListWrapper />
            </>
          }
        />
        <Route
          path='add-vehicle-types'
          element={
            <>
              <PageTitle breadcrumbs={typesBreadcrumbs}>{intl.formatMessage({ id: "add_object" }, { name: intl.formatMessage({ id: "vehicle_type" }) })}</PageTitle>
              <AddType />
            </>
          }
        />
        <Route
          path='edit-vehicle-types'
          element={
            <>
              <PageTitle breadcrumbs={typesBreadcrumbs}>{intl.formatMessage({ id: "edit_object" }, { name: intl.formatMessage({ id: "vehicle_type" }) })}</PageTitle>
              <EditType />
            </>
          }
        />

        //#endregion
        //#region vehicle Maker
        <Route
          path='vehicle-makers'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: 'vehicle_makers' })} </PageTitle>
              <ManageMakersListWrapper />
            </>
          }
        />
        <Route
          path='add-vehicle-makers'
          element={
            <>
              <PageTitle breadcrumbs={makersBreadcrumbs}>{intl.formatMessage({ id: "add_object" }, { name: intl.formatMessage({ id: "vehicle_maker" }) })}</PageTitle>
              <AddMaker />
            </>
          }
        />
        <Route
          path='edit-vehicle-makers'
          element={
            <>
              <PageTitle breadcrumbs={makersBreadcrumbs}>{intl.formatMessage({ id: "edit_object" }, { name: intl.formatMessage({ id: "vehicle_maker" }) })} </PageTitle>
              <EditMaker />
            </>
          }
        />

        //#endregion
        //#region vehicle Model
        <Route
          path='vehicle-models'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "vehicle_model" })}</PageTitle>
              <ManageModelsListWrapper />
            </>
          }
        />
        <Route
          path='add-vehicle-models'
          element={
            <>
              <PageTitle breadcrumbs={modelssBreadcrumbs}>{intl.formatMessage({ id: "add_object" }, { name: intl.formatMessage({ id: "vehicle_model" }) })} </PageTitle>
              <AddModel />
            </>
          }
        />
        <Route
          path='edit-vehicle-models'
          element={
            <>
              <PageTitle breadcrumbs={modelssBreadcrumbs}>{intl.formatMessage({ id: "edit_object" }, { name: intl.formatMessage({ id: "vehicle_model" }) })}</PageTitle>
              <EditModel />
            </>
          }
        />

        //#endregion
        //#region vehicle Color
        <Route
          path='vehicle-colors'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: "vehicle_colors" })} </PageTitle>
              <ManageColorsListWrapper />
            </>
          }
        />
        <Route
          path='add-vehicle-colors'
          element={
            <>
              <PageTitle breadcrumbs={colorsBreadcrumbs}>{intl.formatMessage({ id: "add_object" }, { name: intl.formatMessage({ id: "vehicle_color" }) })} </PageTitle>
              <AddColor />
            </>
          }
        />
        <Route
          path='edit-vehicle-colors'
          element={
            <>
              <PageTitle breadcrumbs={colorsBreadcrumbs}>{intl.formatMessage({ id: "edit_object" }, { name: intl.formatMessage({ id: "vehicle_color" }) })} </PageTitle>
              <EditColor />
            </>
          }
        />

        //#endregion
        //#endregion
        //#region vehicle Group
        <Route
          path='vehicle-groups'
          element={
            <>
              <PageTitle breadcrumbs={vehiclesBreadcrumbs}>{intl.formatMessage({ id: 'vehicle_groups' })}</PageTitle>
              <ManageGroupsListWrapper />
            </>
          }
        />
        <Route
          path='add-vehicle-groups'
          element={
            <>
              <PageTitle breadcrumbs={groupsBreadcrumbs}>{intl.formatMessage({ id: "add_object" }, { name: intl.formatMessage({ id: "vehicle_group" }) })}</PageTitle>
              <AddGroup />
            </>
          }
        />
        <Route
          path='edit-vehicle-groups'
          element={
            <>
              <PageTitle breadcrumbs={groupsBreadcrumbs}>{intl.formatMessage({ id: "edit_object" }, { name: intl.formatMessage({ id: "vehicle_group" }) })} </PageTitle>
              <EditGroup />
            </>
          }
        />
        //#endregion
      </Route>
      <Route index element={<Navigate to='/admin/vehicles/vehicle-types' />} />

    </Routes>

  )
}
export default VechilesPage

